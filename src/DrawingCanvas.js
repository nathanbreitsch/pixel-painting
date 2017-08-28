import React from 'react'
import Cell from './cell'


const DrawingCanvas = (props) => (
  <div className="drawing-canvas">
    {
      props.board.map( (x, x_index) =>
        x.map( (y, y_index) =>
          <Cell x={x_index} y={y_index} color={y} {...props}/>
        )
      )
    }
  </div>
)

export default DrawingCanvas
