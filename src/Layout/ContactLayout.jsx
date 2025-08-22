
import { Outlet } from 'react-router-dom'
import { Contact } from '../Pages/Contact'

export const ContactLayout = () => {
  return (
    <div>
        <Contact/>
        <Outlet/>
    </div>
  )
}
