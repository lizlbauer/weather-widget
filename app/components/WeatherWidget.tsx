'use client'

import { useState, useEffect, useCallback } from 'react'
import { ClearLandscape, CloudyLandscape, RainyLandscape, SnowyLandscape } from './Landscapes'

type Condition = 'clear' | 'cloudy' | 'rainy' | 'snowy'
type Unit = 'C' | 'F'

interface Weather {
  temp: number
  condition: Condition
  city: string
  country: string
}

function wmoToCondition(code: number): Condition {
  if (code === 0 || code === 1) return 'clear'
  if (code === 2 || code === 3) return 'cloudy'
  if (code === 45 || code === 48) return 'cloudy'
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82) || code >= 95) return 'rainy'
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return 'snowy'
  return 'cloudy'
}

function toF(c: number) {
  return Math.round(c * 9 / 5 + 32)
}

const landscapes: Record<Condition, React.FC> = {
  clear: ClearLandscape,
  cloudy: CloudyLandscape,
  rainy: RainyLandscape,
  snowy: SnowyLandscape,
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<Weather | null>(null)
  const [unit, setUnit] = useState<Unit>('C')
  const [cityInput, setCityInput] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchWeather = useCallback(async (cityName: string) => {
    setLoading(true)
    setError(null)
    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`
      )
      const geoData = await geoRes.json()
      if (!geoData.results?.length) {
        setError(`Couldn't find "${cityName}"`)
        setLoading(false)
        return
      }
      const { latitude, longitude, name, country } = geoData.results[0]
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&temperature_unit=celsius&timezone=auto`
      )
      const weatherData = await weatherRes.json()
      const temp = Math.round(weatherData.current.temperature_2m)
      const condition = wmoToCondition(weatherData.current.weather_code)
      setWeather({ temp, condition, city: name, country })
    } catch {
      setError('Something went wrong. Try again.')
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchWeather('New York')
  }, [fetchWeather])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (cityInput.trim()) {
      fetchWeather(cityInput.trim())
      setCityInput('')
    }
  }

  const displayTemp = weather
    ? unit === 'C'
      ? `${weather.temp}°`
      : `${toF(weather.temp)}°`
    : null

  const Landscape = weather ? landscapes[weather.condition] : null

  const now = new Date()
  const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl select-none">
        {/* Background illustration */}
        {Landscape && <Landscape />}

        {/* Loading state */}
        {loading && (
          <div className="absolute inset-0 bg-[#0f1e1e] flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-white/20 border-t-white/80 animate-spin" />
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <div className="absolute inset-0 bg-[#0f1e1e] flex items-center justify-center px-8 text-center">
            <p className="text-white/70 text-sm font-light">{error}</p>
          </div>
        )}

        {/* Content */}
        {weather && !loading && !error && (
          <div className="absolute inset-0 p-5 flex flex-col justify-between">
            {/* Top row */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white text-sm font-light leading-tight">{dateStr}</p>
                <p className="text-white text-sm font-light leading-tight opacity-80">{timeStr}</p>
              </div>
              <p className="text-white text-6xl font-semibold leading-none tracking-tight">
                {displayTemp}
              </p>
            </div>

            {/* Bottom row */}
            <div>
              <p className="text-white text-xl font-medium leading-tight">{weather.city}</p>
              <p className="text-white/80 text-base font-light">{weather.country}</p>
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-3 w-80">
        {/* City search */}
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <input
            type="text"
            value={cityInput}
            onChange={e => setCityInput(e.target.value)}
            placeholder="Search a city..."
            className="flex-1 bg-white/10 text-white placeholder-white/40 text-sm rounded-lg px-4 py-2.5 outline-none focus:bg-white/15 transition-colors"
          />
          <button
            type="submit"
            className="bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg px-4 py-2.5 transition-colors"
          >
            Go
          </button>
        </form>

        {/* Unit toggle */}
        <div className="flex bg-white/10 rounded-lg p-0.5 w-full">
          {(['C', 'F'] as Unit[]).map(u => (
            <button
              key={u}
              onClick={() => setUnit(u)}
              className={`flex-1 text-sm py-2 rounded-md transition-colors ${
                unit === u ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white/80'
              }`}
            >
              °{u}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
