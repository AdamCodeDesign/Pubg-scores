import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function GameModeStats() {
  // const {mode} = useParams();

  const location = useLocation()
  const stats = location.state


useEffect(()=>{
  console.log("location",location)
})

  return (
    <>
    
    <div style={{color:'white', fontSize:"30px"}}>kills : {stats.kills}</div>
    <div style={{color:'white', fontSize:"30px"}}>assists : {stats.assists}</div>
    <div style={{color:'white', fontSize:"30px"}}>wins : {stats.wins}</div>
    <div style={{color:'white', fontSize:"30px"}}>longest kill : {stats.longestKill}</div>
    </>
  )
}
