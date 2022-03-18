import React from 'react';

function MyFunctionComponent() {
  return(
    <h1>
      Hello from a function component!
    </h1>
  )
}

export default class MyClassComponent extends React.Component {
  render() {
    return(
      <h1>
        Hello from a class component!
      </h1>
    )}
}
