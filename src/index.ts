import express from "express"
import db from "./database/db.json"

const PORT = 8080
const app = express()

app.get("/api", (request, response) => {
    response.status(200).json(db.description)
})

app.get("/students", (request, response) => {
    response.status(200).json(db.students)
})

app.get("/teachers", (request, response) => {
    response.status(200).json(db.teachers)
})

app.post("/students", (request, response) => {

    const body = { name: "Sofi", age: 22 }
    response.status(201).json({ message: "SE CREO EL RECURSO!!!" })
})



// TODOS LOS METODOS PARA LOS ENDPOINTS: /STUDENTS Y /TEACHERS

app.listen(PORT, () => {
    console.log("Server listening on port:", PORT);
})