import { Link } from "react-router-dom"


export const NotFound = () => {
  return (
    <div>
        <h1>404 Error Not Found</h1>
        <Link to="/Home">Go To Home Page</Link>
    </div>
  )
}
