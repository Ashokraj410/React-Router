import { Outlet } from "react-router-dom"


export const UserLayout = () => {
  return (
    <div>
        <h1>List of Users</h1>
        <Outlet/>
    </div>
  )
}
