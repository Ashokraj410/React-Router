import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom"


let hasLogged=false;

export const Users = () => {
  const users=useLoaderData();



  useEffect(()=>{
    if(!hasLogged){
      console.log(users);
      hasLogged=true;
    }
  },[users]);
  

  return (
    <div className="user-container">
      {users.map((user)=>{
        return(
          
          /* (this function user data show directly in users page method)
          <div key={user.id}>
            <h4>{user.name}</h4>
            <p>{user.gender}</p>
            <p>{user.phonenumber}</p>
          </div>*/


          <Link to={user.id.toString()} key={user.id}>
          <div className="user-container">
            <h4>{user.name}</h4>
            <p>{user.phonenumber}</p>

          </div>
          </Link>
          

        )
      })}
    </div>
  )
}




