import { Outlet } from "react-router-dom"


export const UserLayout = () => {
  return (
    <div className="user-container">
        <h1>List of Users</h1>
        <Outlet/>
    </div>
  )
}
