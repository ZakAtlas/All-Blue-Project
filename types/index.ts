export type PokemonStats = {
    id: number
    name: string
    height: number
    weight: number
    base_experience: number
    type: Array<PokemonTypes>
    img: string
}

export type PokemonStatsReq = {
    id: number
    name: string
    height: number
    weight: number
    base_experience: number
    types: Array<{ type: { name: PokemonTypes } }>
}

export type PokemonListReq = {
    count: number
    next: string | null
    results: Array<{ name: string; url: string }>
}

export type Pokemon = Array<PokemonStats>

export type PokemonTypes = "normal" | "fire" | "water" | "grass" | "electric" | "ice" | "fighting" | "poison" | "ground" 
| "ground" | "flying" | "psychic" | "bug" | "rock" | "ghost" | "dark" | "dragon" | "steel" | "fairy"