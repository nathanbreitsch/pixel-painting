import React from 'react'

const Cell = ({x, y, color, handleCellClick}) => {
  return (
    <div className="drawing-canvas__cell"
      onClick={ () => handleCellClick(x,y) }
      style={{ backgroundColor: color }}
    >

    </div>
  )
}

export default Cell
