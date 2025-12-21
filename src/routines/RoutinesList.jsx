import { Link } from "react-router"

const RoutinesList = ({ routines }) => {
  if (!routines) return <p>Loading...</p>
  console.log(routines)
  return (
    <ul>
      {routines.map((routine) => 
        <RoutinesListItem 
          key={routine.id}
          routine={routine}
        />
      )}
    </ul>
  )
}

const RoutinesListItem = ({ routine }) => {
  return (
    <li>
      <Link to={"/routines/" + routine.id} >
        <p>{routine.name}</p>
      </Link>
    </li>
  )
}

export default RoutinesList;