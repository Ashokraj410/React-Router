
import { useNavigate} from 'react-router-dom'

export const Contact = () => {
  const navigate=useNavigate();
  return (
    <div className='contact-container'>
      <button className='' onClick={()=>navigate("Details")}>Form</button>
      <button onClick={()=>navigate("info")}>Info</button>
    </div>
  )
}
