import ActivityList from "./ActivityList";
import ActivityForm from "./ActivityForm";
import { useActivity } from "./ActivityContext";

export default function ActivitiesPage() {
  const { activities } = useActivity();

  return (
    <>
      <h1>Activities</h1>
      <ActivityList activities={activities} />
      <ActivityForm />
    </>
  );
}
