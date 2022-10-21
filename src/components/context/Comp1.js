import React, {createContext} from 'react'
import Comp2 from './Comp2';

export const UserContext = createContext();

export default function Comp1() {
  // const [user, setUser] = useState("Jesse Hall");
  const user = 'ali uzair'
  return (
    <UserContext.Provider value={user}>

       <h1>{`Hello ${user}!`}</h1>
      <Comp2 />

    </UserContext.Provider>
  )
}
