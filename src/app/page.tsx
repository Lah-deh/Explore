"use client"

import { useState, useEffect, useMemo } from "react"
import SearchBar from "./components/SearchBar"
import Card from "./components/Card"
import Message from "./components/Message"
import { Country } from "@/types"

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true)
        setError(false)
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca2")
        if (!res.ok) throw new Error("Failed to fetch")
        const data: Country[] = await res.json()
        const sorted = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        )
        setCountries(sorted)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchCountries()
  }, [])

  const filtered = useMemo(() => {
    if (!search.trim()) return countries
    return countries.filter((c) =>
      c.name.common.toLowerCase().includes(search.toLowerCase())
    )
  }, [search, countries])

  return (
    <main className="min-h-screen bg-[#0d0d0d] px-6 py-12 md:px-16 lg:px-24">

    
      <div className="mb-10">
        <h1 className="text-white text-3xl sm:text-4xl font-bold mb-2">
          Countries
        </h1>
        <p className="text-gray-500 text-sm">
          Explore {countries.length} countries in the world.

        </p>
      </div>

    
      <div className="mb-8">
        <SearchBar value={search} onChange={setSearch} />
      </div>

  
      {!loading && !error && search && (
        <p className="text-gray-500 text-xs mb-6">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""} for{" "}
          <span className="text-[#cf1247]">"{search}"</span>
        </p>
      )}

  
      {loading && <Message type="loading" />}
      {error && <Message type="error" />}
      {!loading && !error && filtered.length === 0 && (
        <Message type="empty" />
      )}

    
      {!loading && !error && filtered.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((country) => (
            <Card key={country.cca2} country={country} />
          ))}
        </div>
      )}

    </main>
  )
}