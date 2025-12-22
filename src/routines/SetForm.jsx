import { useEffect, useState } from "react";
import { getActivities } from "../api/activities";
import { createSet } from "../api/routines";
import { useAuth } from "../auth/AuthContext";


const SetForm = ({ routine, getRoutine }) => {
  const { token } = useAuth();
  const [activities, setActivities] = useState();
  const [error, setError] = useState()

  const syncActivities = async () => {
    const retrievedActivities = await getActivities();
    setActivities(retrievedActivities);
  }

  const tryCreateSet = async (formData) => {
    setError(null);

    const routineId = routine.id;
    const activityId = Number(formData.get("activity"));
    const count = Number(formData.get("count"));

    try {
      await createSet(token, { activityId, routineId, count });
      await getRoutine();
    } catch (e) {
      setError(e.message)
    }
  }

  useEffect(() => {
    syncActivities()
  }, [])

  if (!activities) return <p>Loading...</p>
  return (
    <>
      <h2>Add a Set</h2>
      <form action={tryCreateSet}>
        <label>
          Activities
          <select name="activity">
            {activities.map((activity) => (
              <option key={activity.id} value={activity.id}>
                {activity.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Count
          <input type="text" name="count" />
        </label>
        <button>Add Set</button>
      </form>
      {error && <p role="alert">{error}</p>}
    </>
  );
}

export default SetForm;