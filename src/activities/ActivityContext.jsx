import { createContext, useState, useEffect } from "react";

const ActivityContext = createContext();

export const ActivityProvider = ({children}) => {
  
  const [error, setError] = useState();

  const syncActivities = async () => {
    const data = await getActivities();
    setActivities(data);
  };

  const tryDelete = async () => {
    setError(null);

    try {
      await deleteActivity(token, activity.id);
      syncActivities();
    } catch (e) {
      setError(e.message);
    }
  };

}