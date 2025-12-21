import {useAuth} from "../auth/AuthContext"

const Routine = () => {
  const { token } = useAuth();
  
  return <p>Loading...</p>
}

export default Routine;