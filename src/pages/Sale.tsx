import React from 'react'
import { useParams } from 'react-router-dom'
import { IVenda, useData } from '../contexts/DataContext'
import useFetch from '../hooks/useFetch'
import Loading from '../components/Loading'

type VendaWithoutDate = Omit<IVenda, 'data'>

const Sale = () => {
  const { id } = useParams()
  const { data, loading, error } = useFetch<VendaWithoutDate>(`https://data.origamid.dev/vendas/${id}`)
  if (data === null) return <Loading />
  return (
    <div>
      <div className='box mb'>ID: {data.id}</div>
      <div className='box mb'>Nome: {data.nome}</div>
      <div className='box mb'>Preço: {data.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div>
      <div className='box mb'>Status: {data.status}</div>
      <div className='box mb'>Pagamento: {data.pagamento}</div>
    </div>
  )
}

export default Sale