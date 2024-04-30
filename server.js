import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify()

const database = new DatabaseMemory()

server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body

    database.create({
        title,
        description,
        duration
    })
    console.log(request.body)
    return reply.status(201).send()
})


server.get('/videos', (request) =>{
    const search = request.query.search

    const videos = database.list(search)

    return videos
 })

server.put('/videos/:id', (request, reply) =>{
    const videoID = request.params.id
    const {title, description, duration } = request.body

    database.update(videoID, {
        title,
        description, 
        duration
    })

    return reply.status(204).send()
})

server.delete('/videos/:id', () =>{

    return 'deletar video'
})


// http://localhost:3333
server.listen({
    port: 3333,
})