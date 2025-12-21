import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { createRoutine } from "../api/routines";

const RoutinesForm = () => {
  const { token } = useAuth();
  const [error, setError] = useState();

  const tryCreateRoutine = async (formData) => {
    setError(null);

    const routineName = formData.get("name");
    const goal = formData.get("goal")

    try {
      await createRoutine(token, {routineName, goal})
    } catch (e) {
      setError(e.message)
    }
  }
  return (
    <>
      <h2>Add Routine</h2>
      <form action={tryCreateRoutine}>
        <label>
          Routine Name
          <input type="text" name="name" />
        </label>
        <label>
          Goal
          <input type="text" name="goal" />
        </label>
        <button>Add New Routine</button>
      </form>
      {error && <p role="alert">{error}</p>}
    </>
  )
}

export default RoutinesForm;