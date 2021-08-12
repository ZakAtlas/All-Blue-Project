import { PokemonListReq, PokemonStats, PokemonStatsReq, PokemonTypes } from '../types'
import api from './api'

const getPokemon = async (): Promise<Array<PokemonStats>> => {
    const pokemonListReq = await api<PokemonListReq>(
        'https://pokeapi.co/api/v2/pokemon/?limit=1118'
    )

    const pokemonNames: string[] = pokemonListReq.results.map((data) => {
        return data.name
    })

    const pokemon: Array<PokemonStats> = []

    for (let i = 0; i < pokemonNames.length; i++){
        const pokemonStatsReq: PokemonStatsReq = await api<PokemonStatsReq>(
            `https://pokeapi.co/api/v2/pokemon/${pokemonNames[i]}`
        )

        const type: Array<PokemonTypes> = pokemonStatsReq.types.map((data) => {
            return data.type.name
        })

        const pokemonStats: PokemonStats = {
            ...pokemonStatsReq,
            type,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonStatsReq.id}.png`
        }

        pokemon[i] = pokemonStats
    }
    
    return pokemon
}

export default getPokemon