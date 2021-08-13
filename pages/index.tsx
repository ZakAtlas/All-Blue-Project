import { Button, capitalize, Grid, Typography } from '@material-ui/core'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import CustomSearchBar from '../components/SearchBar'
import PokeDexLogo from '../public/Images/pokedexLogo.png'
import { Pokemon, PokemonStats } from '../types'
import getPokemon from '../utillity/pokemonAPI'

export const getStaticProps: GetStaticProps = async () => {
  const pokemons = await getPokemon()

  return {
    props: { pokemons }
  }
}

const Home = ({ pokemons }: { pokemons: Pokemon }) => {
  const [partialSearch, setPartialSearch] = useState<string>('')
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonStats | null>(
    null
  )
  const [pokemonCards, setPokemonCards] = useState<any>(
    pokemons.map((pokemon) => {
      return (
        <Grid
          container
          direction="row"
          xl={3}
          lg={4}
          sm={6}
          xs={12}
          item
          key={pokemon.id}
          alignContent="flex-start"
          justifyContent="center"
        >
          <PokemonCard onClicked={setSelectedPokemon} pokemon={pokemon} />
        </Grid>
      )
    })
  )

  useEffect(() => {
    setPokemonCards(
      pokemons
        .filter(
          (x) =>
            x.name.includes(partialSearch) && x.name.startsWith(partialSearch)
        )
        .map((pokemon) => {
          return (
            <Grid
              container
              direction="row"
              xl={3}
              lg={4}
              sm={6}
              xs={12}
              item
              key={pokemon.id}
              alignContent="flex-start"
              justifyContent="center"
            >
              <PokemonCard onClicked={setSelectedPokemon} pokemon={pokemon} />
            </Grid>
          )
        })
    )
  }, [partialSearch])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px 10px 10px 10px'
      }}
    >
      <Image width={400} height={100} src={PokeDexLogo} />
      <div style={{ paddingTop: '30px', paddingBottom: '40px' }}>
        <CustomSearchBar onSearch={setPartialSearch} />
      </div>
      {!selectedPokemon ? null : (
        <div style={{ position: 'absolute', zIndex: 1 }}>
          <Button
            style={{
              background: '#FFFFFF',
              border: '5px solid gray',
              borderRadius: '25px',
              borderColor: '#000000',
              padding: '20px 10px 20px 10px',
              width: '320px'
            }}
            onClick={() => setSelectedPokemon(null)}
          >
            <Grid justifyContent="center" spacing={2} container>
              <Typography variant="h5">
                {capitalize(selectedPokemon.name)}
              </Typography>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                item
                direction="row"
              >
                <Grid item>
                  <div
                    style={{
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      width: '300px',
                      height: '300px',
                      position: 'relative',
                      alignContent: 'center'
                    }}
                  >
                    <Image
                      placeholder="blur"
                      blurDataURL="https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-games-video-casino-gamer-1-42381.png"
                      layout="fill"
                      objectFit="contain"
                      src={selectedPokemon.img}
                    />
                  </div>
                </Grid>
                <Grid
                  container
                  style={{
                    background: '#30a7d7',
                    borderRadius: '25px'
                  }}
                  item
                >
                  <Grid
                    style={{ padding: '10px 10px 10px 10px' }}
                    item
                    container
                    direction="column"
                  >
                    <Grid item>
                      <Typography variant="body1">Height:</Typography>
                    </Grid>
                    <Typography variant="body1">
                      {selectedPokemon.height}
                    </Typography>
                    <Typography variant="body1">Weight:</Typography>
                    <Typography variant="body1">
                      {selectedPokemon.weight}
                    </Typography>
                    <Typography variant="body1">Experience:</Typography>
                    <Typography variant="body1">
                      {selectedPokemon.base_experience}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Button>
        </div>
      )}
      <Grid container justifyContent="space-between" direction="row">
        <Grid item lg={2} md={1} xs-hidden="true" />
        <Grid
          container
          justifyContent="flex-start"
          item
          lg={8}
          md={10}
          xs={12}
          spacing={3}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '25px',
            height: '70vh'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              width: '100%',
              height: '100%',
              padding: '10px 10px 10px 25px'
            }}
          >
            <div
              style={{
                display: 'flex',
                overflowY: 'auto',
                width: '100%',
                height: '100%',
                padding: '10px 10px 10px 10px'
              }}
            >
              <Grid container justifyContent="center">
                {pokemonCards}
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid item lg={2} md={1} xs-hidden="true" />
      </Grid>
    </div>
  )
}

export default Home
