import { fastifyCors } from "@fastify/cors"
import { fastify } from "fastify"
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod"

const server = fastify()

server.setValidatorCompiler(validatorCompiler)
server.setSerializerCompiler(serializerCompiler)

server.register(fastifyCors, { origin: "*" })

server.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!")
})
