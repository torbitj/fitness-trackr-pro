import { Link } from "react-router";

export default function ActivityList({ activities }) {
  // if (!activities) return <p>Loading...</p>
  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem
          key={activity.id}
          activity={activity}
        />
      ))}
    </ul>
  );
}

function ActivityListItem({ activity }) {

  return (
    <li>
      <Link to={"activities/" + activity.id}>
        <p>{activity.name}</p>
      </Link>
    </li>
  );
}
