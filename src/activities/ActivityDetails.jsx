import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getActivityById, deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";


const ActivityDetails = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [activity, setActivity] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const tryDelete = async () => {
    setError(null);
    
    try {
      await deleteActivity(token, activity.id);
      navigate("/")
    } catch (e) {
      setError(e.message);
    }
  };

  const getActivity = async () => {
    const activityData = await getActivityById(id);
    setActivity(activityData)
  }
  
  useEffect(() => {
    getActivity();
  }, []);

  if (!activity) return <p>Loading....</p>

  return (
    <>
      <h1>{activity.name.toUpperCase()}</h1>
      <p>{activity.description}</p>
      <p>Created By {activity.creatorName}</p>
      {token && <button onClick={tryDelete}>Delete</button>}
      {error && <p role="alert">{error}</p>}
    </>
  );
}

export default ActivityDetails;