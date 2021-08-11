import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import MediaCard from '../card'
import { PokemonStats } from '../../types'
import Image from 'next/image'

export default function PokemonCard({ pokemon }: { pokemon: PokemonStats }) {
  let typeText = ''

  for (let i = 0; i < pokemon.type.length; i++) {
    typeText += pokemon.type[i]

    if (i != pokemon.type.length - 1) {
      typeText += ', '
    }
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative'
      }}
    >
      <div
        style={{
          width: '100%',
          height: '50%',
          position: 'relative'
        }}
      >
        <Image src={pokemon.img} layout="fill" objectFit="contain" />
      </div>
      <Typography align="center" variant="h1">
        {pokemon.name}
      </Typography>
      <div style={{ paddingTop: '10px' }}>
        <Typography align="center" variant="h4">
          Type: {typeText}
        </Typography>
      </div>
      <div style={{ paddingTop: '10px' }}>
        <Typography align="center" variant="h4">
          Height: {pokemon.height}
        </Typography>
      </div>
    </div>
  )
}
