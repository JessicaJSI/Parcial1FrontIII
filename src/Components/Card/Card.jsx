import React from 'react'

const Card = ( {nombre, cancion, cantante} ) => {
  return (
    <div style={{  
        border: '1px solid #ccc',
        borderRadius: '4px'
        }}>
        <h2>Hola {nombre} </h2>
        <h2>Tu canción preferida es {cancion} </h2>
        <h2>y su cantante es {cantante} </h2>
    </div>
  )
}

export default Card