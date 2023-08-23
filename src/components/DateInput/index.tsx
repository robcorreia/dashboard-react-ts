import React from 'react'

type IDataInput = React.ComponentProps<'input'> & {
  label: string;
  id: string;
}

const DateInput = ({ id, label, ...rest }: IDataInput) => {

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="date" {...rest} />
    </div>
  )
}

export default DateInput