import { useEffect, useState } from "react";
import {useAuth} from "../auth/AuthContext"
import { useParams } from "react-router";
import { getRoutineById } from "../api/routines";
import SetForm from "./SetForm";

const Routine = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [routine, setRoutine] = useState();

  const getRoutine = async () => {
    const routineData = await getRoutineById(id);
    setRoutine(routineData)
  }

  const tryDeleteRoutine = async () => {

  }

  useEffect(() => {
    getRoutine()
  }, [])


  if (!routine) return <p>Loading...</p>
  
  return (
    <>
      <h1>{routine.name}</h1>
      <p>Created by: {routine.creatorName}</p>
      <p>{routine.goal}</p>
      <h2>Sets</h2>
      {routine.sets.map((set) => <SetItem key={set.id} token={token} set={set} />)}
      {token && <button>Delete Routine</button>}
      {token && <SetForm routine={routine} getRoutine={getRoutine} />}
    </>
  )
}

const SetItem = ({ set, token }) => {
  const tryDeleteSet = async (setId) => {
    
  };
  return (
    <li>{set.name} x {set.count} {token && <button onClick={() => tryDeleteSet(set.id)}>Delete</button>}</li>
  )
}

export default Routine;