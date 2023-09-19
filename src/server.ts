import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from '@fastify/cors';

const server = fastify()
const prisma = new PrismaClient();

server.register(cors)

server.get("/hello", () => {
    const habits = prisma.habit.findMany()
    return habits
})

server.listen({
    host: "0.0.0.0",
    port: 3000,
}).then((response) => {
    console.log(`HTTP Server running at: ${response}`)
})