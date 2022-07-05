import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  const {id} = useParams();
  return (
    <div>MovieDetail id is - {id}</div>
  )
}

export default MovieDetail