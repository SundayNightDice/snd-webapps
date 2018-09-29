import * as React from 'react'
import { ReactChildren } from 'react';

interface RenderIfProps {
  condition: () => any
  children: React.ReactElement<ReactChildren>
}

const RenderIf: React.SFC<RenderIfProps> = ({ condition, children }) => {
  if (condition()) {
    return children;
  }
  return null;
}

export default RenderIf
