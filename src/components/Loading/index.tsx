import React from 'react'

const loadingStyle: React.CSSProperties = {
  border: "var(--gap-sm) solid var(--color-2)",
  borderRightColor: 'var(--color-4)',
  width: 'var(--gap)',
  height: 'var(--gap)',
  borderRadius: '50%',
  animation: 'spin 1s infinite',
}

const Loading = () => {

  return (
    <div style={loadingStyle}></div>
  )
}

export default Loading