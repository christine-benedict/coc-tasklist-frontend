const BASE = "http://localhost:3000"

let getTasks = function(){
  return fetch(BASE+'/tasks').then( (rawResponse) => {
    let parsedResponse = rawResponse.json()
    console.log(parsedResponse)
    return parsedResponse
  })
}

export { getTasks }

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

let getFilteredTasks = function(department){
  return fetch(BASE+`/${department}`).then( (rawResponse) => {
    let parsedResponse = rawResponse.json()
    console.log(parsedResponse)
    return parsedResponse
  })
}

export { getFilteredTasks }

let updateTask = function(id){
  return fetch(BASE+"/done/"+id,{
    method: "PUT"
  }).then( (rawResponse) => {
    let parsedResponse = rawResponse.json()
    return parsedResponse
  })
}

export { updateTask }


let deleteTask = function(id) {
  return fetch(BASE+ '/tasks/' + id, {
    method: 'delete'
  })
}

export { deleteTask }
