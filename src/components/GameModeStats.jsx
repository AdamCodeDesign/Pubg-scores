import React, { useState } from 'react'

export default function GameModeStats({stats}) {
  return (
    <>
    {stats &&
    <div style={{color:'white'}}>Kills: {stats.kills}</div>}
    </>
  )
}
