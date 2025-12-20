import { useEffect, useState } from "react";
import { getRoutines } from "../api/routines";
import { useAuth } from "../auth/AuthContext";

const RoutinesPage = () => {
  const { token } = useAuth();
  const [routines, setRoutines] = useState();

  const syncRoutines = async () => {
    const routinesArray = await getRoutines();
    setRoutines(routinesArray)
  };

  useEffect(() => {
    syncRoutines();
  }, []);

  return (
    <>
      <h1>Routines</h1>
      <RoutinesList routines={routines} syncRoutines={syncRoutines} />
      {token && <RoutinesForm syncRoutines={syncRoutines} />}
    </>
  )
}

export default RoutinesPage;