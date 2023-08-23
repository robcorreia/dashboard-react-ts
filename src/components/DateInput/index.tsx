import React from 'react'

const generalStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: 'var(--color-2)',
  padding: 'var(--gap-sm) .75rem',
  background: 'var(--color-4)',
  borderRadius: 'var(--gap-sm)'
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: 'var(--gap-sm)',
  fontWeight: 600,
  ...generalStyle
}

const inputStyle: React.CSSProperties = {
  border: 'none',
  fontFamily: 'monospace',
  ...generalStyle
}

type IDataInput = React.ComponentProps<'input'> & {
  label: string;
  id: string;
}

const DateInput = ({ id, label, ...rest }: IDataInput) => {

  return (
    <div>
      <label style={labelStyle} htmlFor={id}>{label}</label>
      <input style={inputStyle} id={id} type="date" {...rest} />
    </div>
  )
}

export default DateInput