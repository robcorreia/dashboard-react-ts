import React from 'react'
import DateInput from '../DateInput'

const DateRange = () => {
  const [start, setStart] = React.useState('')
  const [end, setEnd] = React.useState('')

  return (
    <form className='box flex' onSubmit={(e) => e.preventDefault()}>
      <DateInput id='start' label="Início" onChange={({ target }) => setStart(target.value)} />
      <DateInput id='end' label="Final" onChange={({ target }) => setEnd(target.value)} />
    </form>
  )
}

export default DateRange