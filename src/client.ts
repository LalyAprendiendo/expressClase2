type method = "POST" | "GET" | "PUT" | "PATCH" | "DELETE"

async function fetchData(url: string, method: method = "GET", data = {}) { // CON LA ASIGNACION LE DEFINO EL VALOR POR DEFECTO QUE TOMARÁ EL PARAMETRO CUANDO NO ME ENVIEN NADA AL INVOCAR LA FUNCIÓN
    const response = await fetch(`http:localhost:8080/${url}`, {
        method: method, // SE PUEDE SIMPLIFICAR DEJANDO SOLO METHOD Y COMO VALOR LE COLOCARÁ LA VARIABLE CON ESE MISMO NOMBRE
        body: JSON.stringify(data)
    })

    console.log(response.status);

    return await response.json()
}

async function main() {
    const data = await fetchData("students", "POST", { name: "Sofi", age: 22 })
    console.log(data);
}

main()