Ball Tracking Project

Backend + Frontend

Backend project:

`
run
npm i
npm run start
`

#Available apis#

`POST /new-goal-position` 
starts a new game session, generate a session id for the game session and returns the session id
body structure:

`
{
  ballStartCoordinates: number[]
}
`

`POST /checkForWin` 
- checks whether a user with a session id and coordinates has won (meannings he's as close as 10 meters to the goal)
body structure:

`
{
  sessionId: string,
  goalCoordinates: number[]
}
`
