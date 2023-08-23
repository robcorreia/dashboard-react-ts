import React from 'react'
import { useData } from '../../contexts/DataContext'

const Header = () => {
  const { data } = useData()
  return (
    <div>Header {data?.map(item => item.nome)}</div>
  )
}

export default Header