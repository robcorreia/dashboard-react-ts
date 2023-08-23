import React from 'react'
import DateInput from '../DateInput'
import { useData } from '../../contexts/DataContext'

const DateRange = () => {
  const { start, setStart, end, setEnd } = useData()

  return (
    <form className='box flex' onSubmit={(e) => e.preventDefault()}>
      <DateInput
        id='start'
        label="Início"
        value={start}
        onChange={({ target }) => setStart(target.value)}
      />
      <DateInput
        id='end'
        label="Final"
        value={end}
        onChange={({ target }) => setEnd(target.value)} />
    </form>

  )
}

export default DateRange