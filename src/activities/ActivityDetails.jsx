import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getActivityById } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

const ActivityDetails = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [activity, setActivity] = useState();
  
  useEffect(() => {
    const getActivity = async () => {
      setActivity(await getActivityById(id));
    };
    getActivity();
  }, []);

  return (
    <>
      <h1>{activity.name.toUpperCase()}</h1>
      <p>{activity.description}</p>
      {token && <button onClick={tryDelete}>Delete</button>}
      {error && <p role="alert">{error}</p>}
    </>
  );
}

export default ActivityDetails;