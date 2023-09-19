import fastify from "fastify";


const server = fastify()

server.get("/hello", () => {
    return "Hello World"
})

server.listen({
    host: "0.0.0.0",
    port: 3000,
}).then((response) => {
    console.log(`HTTP Server running at: ${response}`)
})