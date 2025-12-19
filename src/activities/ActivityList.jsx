import { Link } from "react-router";
import { useActivity } from "./ActivityContext";

export default function ActivityList() {
  const { activities, syncActivities } = useActivity();
  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem
          key={activity.id}
          activity={activity}
          syncActivities={syncActivities}
        />
      ))}
    </ul>
  );
}

function ActivityListItem({ activity }) {

  return (
    <li>
      <Link acitvity={activity} to={"activities/" + activity.id}>
        <p>{activity.name}</p>
      </Link>
    </li>
  );
}
