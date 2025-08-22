
import { useNavigate} from 'react-router-dom'

export const Contact = () => {
  const navigate=useNavigate();
  return (
    <div>
      <button onClick={()=>navigate("Details")}>Info</button>
      <button onClick={()=>navigate("info")}>form</button>
    </div>
  )
}
