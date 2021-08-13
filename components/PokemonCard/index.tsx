import { Button, capitalize, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { PokemonStats } from '../../types'
import Image from 'next/image'
import TypeText from '../TypeText'

const PokemonCard = ({
  pokemon,
  onClicked
}: {
  pokemon: PokemonStats
  // eslint-disable-next-line no-unused-vars
  onClicked: (val: PokemonStats) => void
}) => {
  return (
    <Button onClick={() => onClicked(pokemon)}>
      <div
        style={{
          paddingTop: '20px',
          maxHeight: '300px',
          width: '200px'
        }}
      >
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '150px',
            height: '150px',
            position: 'relative',
            alignContent: 'center'
          }}
        >
          <Image layout="fill" objectFit="contain" src={pokemon.img} />
        </div>
        <Grid container direction="column">
          <Grid xs={3} item>
            <Typography
              align="left"
              variant="subtitle1"
            >{`#${pokemon.id}`}</Typography>
          </Grid>
          <Typography align="left" variant="h5">
            {capitalize(pokemon.name)}
          </Typography>
          <TypeText type={pokemon.type[0]} />
        </Grid>
      </div>
    </Button>
  )
}

export default PokemonCard
