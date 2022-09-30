const TodoController = require('./controllers/TodoController')

// Define url API in Here
const _routes = [
     ['/tes', TodoController]
]

// https://localhost:5001/tes

const routes = (app) => {
     _routes.forEach((route) => {
          const [ url, controller ] = route
          app.use(`${url}`, controller)
     })
}

module.exports = routes 

// kalo class exports nya harus pake new