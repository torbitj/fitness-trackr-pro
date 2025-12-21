const API = import.meta.env.VITE_API;

export const getRoutines = async () => {
  try {
    const response = await fetch(API + "/routines");
    const retrievedRoutines = await response.json();
    return retrievedRoutines;
  } catch (e) {
    console.log(e)
    return []
  }
}

export const getRoutineByID = async (id) => {
  try {
    const response = await fetch(API + `/routines/${id}`);
    const routine = await response.json();
    return routine;
  } catch (e) {
    console.log(e)
    return null;
  }
}

export const createRoutine = async (token, routine) => {
  const response = await fetch(API + "/routines", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(routine)
  })

  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message);
  }
}