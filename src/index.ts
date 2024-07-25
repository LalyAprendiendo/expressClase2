import express from "express"
import db from "./database/db.json"

const PORT = 8080
const app = express()

app.get("/api", (request, response) => {
    response.status(200).json(db.description)
})

app.get("/teachers", (request, response) => {
    response.status(200).json(db.teachers)
})

app.post("/teachers", (request, response) => {
    response.status(200).json(db.teachers)
})

app.put("/teachers", (request, response) => {
    response.status(200).json(db.teachers)
})

app.patch("/teachers", (request, response) => {
    response.status(200).json(db.teachers)
})

app.delete("/teachers", (request, response) => {
    response.status(200).json(db.teachers)
})

app.get("/students", (request, response) => {
    response.status(200).json(db.students)
})

app.post("/students", (request, response) => {

    const body = { name: "Sofi", age: 22 }
    response.status(201).json({ message: "SE CREO EL RECURSO!!!" })
})

app.put("/students", (request, response) => {
    response.status(200).json(db.students)
})

app.patch("/students", (request, response) => {
    response.status(200).json(db.students)
})
app.delete("/students", (request, response) => {
    response.status(200).json(db.students)
})

// TODOS LOS METODOS PARA LOS ENDPOINTS: /STUDENTS Y /TEACHERS

app.listen(PORT, () => {
    console.log("Server listening on port:", PORT);
})