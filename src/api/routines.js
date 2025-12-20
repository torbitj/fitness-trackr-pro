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