import { Box } from '@mui/material'
import React from 'react'

export default function RankedStats({stats}) {
  return (
    <>
    <div style={{fontSize:'3em', color:'white'}}>Działą</div>
    <Box color='white'>{stats.kda}</Box>
    </>
  )
}
