export type PokemonStats = {
    id: number
    name: string
    height: number
    type: Array<string>
    img: string
}

export type PokemonStatsReq = {
    id: number
    name: string
    height: number
    types: Array<{ type: { name: string } }>
}

export type PokemonListReq = {
    count: number
    next: string | null
    results: Array<{ name: string; url: string }>
}