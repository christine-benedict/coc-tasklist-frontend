const BASE = "http://localhost:3000"

let getTasks = function(){
  return fetch(BASE+'/tasks').then( (rawResponse) => {
    let parsedResponse = rawResponse.json()
    console.log(parsedResponse)
    return parsedResponse
  })
}

export { getTasks }

let getSortedTasks = function(requestedFilter){
  return fetch(BASE+`/${requestedFilter}`).then( (rawResponse) => {
    let parsedResponse = rawResponse.json()
    console.log(parsedResponse)
    return parsedResponse
  })
}

export { getSortedTasks }

let createTask = function(task){
  return fetch(BASE+"/tasks",{
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST"
  }).then( (rawResponse) => {
    let parsedResponse = rawResponse.json()
    return parsedResponse
  })
}

export { createTask }
