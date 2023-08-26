import React from 'react'
import { useData } from '../contexts/DataContext'
import ItemSale from '../components/ItemSale';

const Sales = () => {
  const { data } = useData()

  if (data === null) return null;
  return (
    <ul>
      {data.map(sale => <li><ItemSale key={sale.id} sale={sale} /></li>)}
    </ul>
  )
}

export default Sales