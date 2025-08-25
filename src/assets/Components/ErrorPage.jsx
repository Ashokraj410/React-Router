import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error=useRouteError();

  return (
    <div>
        <h2>Oops! an error occured</h2>
        <p>{error.message}</p>
    </div>
  )
}
