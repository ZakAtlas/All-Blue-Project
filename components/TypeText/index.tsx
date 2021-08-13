import { Typography } from '@material-ui/core'
import React from 'react'
import { PokemonTypes } from '../../types'

export default function TypeText({ type }: { type: PokemonTypes }) {
  let color = ''

  switch (type) {
    case 'normal':
      color = '#FFA500'
      break
    case 'water':
      color = '#4592c4'
      break
    case 'fire':
      color = '#fd7d24'
      break
    case 'poison':
      color = '#b97fc9'
      break
    case 'grass':
      color = '#9bcc50'
      break
    default:
      color = '#FF0000'
  }

  return (
    <div style={{ background: color, width: '73.14px', height: '30px' }}>
      <Typography variant="body2" align="center" style={{ color: '#FFFFFF' }}>
        {type}
      </Typography>
    </div>
  )
}
