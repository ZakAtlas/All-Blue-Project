import { GetStaticProps } from 'next'
import api from '../utillity/api'
import MUIDataTable, { Responsive } from 'mui-datatables'
import React from 'react'
import { PokemonListReq, PokemonStats, PokemonStatsReq } from '../types'
import { Grid } from '@material-ui/core'
import PokemonCard from '../components/PokemonCard'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import pokomonLogo from '../public/Images/pokemon-logo.png'
import { width } from '@material-ui/system'

type PokemonList = Array<{ id: number; name: string }>

export const getStaticProps: GetStaticProps = async () => {
  const data = await api<PokemonListReq>(
    'https://pokeapi.co/api/v2/pokemon/?limit=1118'
  )

  const pokemonList: Array<{}> = []

  for (let i = 0; i < data.results.length; i++) {
    pokemonList[i] = [i, data.results[i].name]
  }

  return {
    props: { pokemonList }
  }
}

const Home = ({ pokemonList }: { pokemonList: PokemonList }) => {
  const [pokemon, setPokemon] = useState<string>()
  const [pokemonStats, setPokemonStats] = useState<PokemonStats>()

  const onRowClick = (rowData: string[]) => {
    setPokemon(rowData[1])
  }

  useEffect(() => {
    const getPokemonStats = async (pokemon: string) => {
      const data = await api<PokemonStatsReq>(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      )

      const type: string[] = data.types.map((type) => {
        return type.type.name
      })

      const pokemonStats: PokemonStats = {
        ...data,
        type,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
      }

      setPokemonStats(pokemonStats)
    }

    if (pokemon) getPokemonStats(pokemon)
  }, [pokemon])

  const responsive: Responsive = 'simple'

  const columns = ['PokeIndex', 'Name']
  const options = {
    selectableRowsHeader: false,
    selectableRowsHideCheckboxes: true,
    download: false,
    filter: false,
    viewColumns: false,
    print: false,
    confirmFilters: false,
    rowsPerPageOptions: [],
    responsive,
    onRowClick
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Image width="200px" height="200px" src={pokomonLogo} />
      </div>
      <Grid
        style={{ padding: '10px 0 0 10px' }}
        container
        justifyContent="center"
      >
        <Grid alignItems="stretch" item md={4} xs={6}>
          <MUIDataTable
            title={'PokeDex'}
            data={pokemonList}
            columns={columns}
            options={options}
          />
        </Grid>
        <Grid item md={4} xs={6}>
          {pokemonStats && <PokemonCard pokemon={pokemonStats} />}
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
