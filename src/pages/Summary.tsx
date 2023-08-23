import React from 'react'
import { useData } from '../contexts/DataContext'

const Summary = () => {
  const { data } = useData()

  return (
    <div>Summary {data && data[0].preco}</div>
  )
}

export default Summary