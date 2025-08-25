import { useLoaderData} from "react-router-dom"

export const User = () => {

  const userDetail= useLoaderData();


  return (
    <div>
      <h2>{userDetail.name}</h2>
      <p>{userDetail.gender}</p>
      <p>{userDetail.phonenumber}</p>
    </div>
  )
};
