import React, {useContext} from 'react'
import {UserContext} from './Comp1'
export default function Comp5() {
  // console.log(UserContext)
  const user = useContext(UserContext);
  // console.log(user)

  return (
    <div>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </div>
  )
}
