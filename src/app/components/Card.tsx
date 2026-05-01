import Image from "next/image"
import { Country } from "@/types"

interface CountryCardProps {
  country: Country;
}

const Card = ({ country }: CountryCardProps) => {
  return (
    <div className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden hover:border-[#cf1247]/50 transition-colors duration-300">
      <div className="relative w-full h-40">
        <Image
          src={country.flags.svg}
          alt={country.flags.alt || `Flag of ${country.name.common}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-white font-bold text-base">
          {country.name.common}
        </h3>
        <p className="text-gray-400 text-xs">
          <span className="text-[#cf1247] font-medium">Region: </span>
          {country.region}
        </p>
        <p className="text-gray-400 text-xs">
          <span className="text-[#cf1247] font-medium">Capital: </span>
          {country.capital?.[0] || "N/A"}
        </p>
        <p className="text-gray-400 text-xs">
          <span className="text-[#cf1247] font-medium">Population: </span>
          {country.population.toLocaleString()}
        </p>
      </div>
    </div>
  )
}

export default Card