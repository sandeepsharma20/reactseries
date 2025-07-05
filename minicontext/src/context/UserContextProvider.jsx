 import React, { Children } from 'react';
 import UserContext from './UserContext';

 const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null)
return (
    <UserContext.Provider value={{UserContext,setUser}}>
{children}
    
    </UserContext.Provider>
)
 }
 export default UserContextProvider