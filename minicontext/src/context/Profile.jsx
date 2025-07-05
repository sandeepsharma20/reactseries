 import React, { useContext } from 'react'
 import UserContext from './UserContext'
 const Profile = () => {
    const {user}=useContext(UserContext);
    if(!user)return <div>please login</div>
    return <div>Welcom{user}</div>
   return (
     <div>
       Profile
     </div>
   )
 }
 
 export default Profile
 