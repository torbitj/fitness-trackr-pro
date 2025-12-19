import { createContext, useState, useEffect, useContext } from "react";
import { getActivities } from "../api/activities";

const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  
  const syncActivities = async () => {
    const data = await getActivities();
    setActivities(data);
  };


  useEffect(() => {
    syncActivities();
  }, []);

  const value = { activities, syncActivities }
  
  return <ActivityContext.Provider value={value}>{children}</ActivityContext.Provider>
}

export const useActivity = () => {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error("Need to have access to ActivityProvider to use.")
  }
  return context;
}