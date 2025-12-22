import { useEffect, useState } from "react";
import { getActivities } from "../api/activities";


const SetForm = ({ routine }) => {
  const [activities, setActivities] = useState();

  const syncActivities = async () => {
    const retrievedActivities = await getActivities();
    setActivities(retrievedActivities);
  }

  const tryCreateSet = (formData) => {

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
            {activities.map((activity) => <option key={activity.id}>{activity.name}</option>)}
          </select>
        </label>
        <label>
          Count
          <input type="text" name="count"/>
        </label>
      </form>
    </>
  )
}

export default SetForm;