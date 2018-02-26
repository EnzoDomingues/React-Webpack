import React from 'react'
import { childrenWithProps } from '../utils/react.Utils'

export default props => (
  <div>
    <h1>Family</h1>
    { childrenWithProps(props.children, props) }
  </div>
)