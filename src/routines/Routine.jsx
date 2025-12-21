import { useEffect, useState } from "react";
import {useAuth} from "../auth/AuthContext"
import { useParams } from "react-router";
import { getRoutineById } from "../api/routines";

const Routine = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [routine, setRoutine] = useState();

  const getRoutine = async () => {
    const routineData = await getRoutineById(id);
    setRoutine(routineData)
  }
  useEffect(() => {
    getRoutine()
  }, [])


  if (!routine) return <p>Loading...</p>
  
  return (
    <>
      <h1>{routine.name}</h1>
      <p>Created by: {routine.creatorName}</p>
      <h2>Sets</h2>
      {routine.sets.map((set) => <SetItem key={set.id} set={set} />)}
    </>
  )
}

const SetItem = ({set}) => {
  return <p>{set.name}</p>
}

export default Routine;