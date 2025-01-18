import { jsonSchemaTransform } from "fastify-type-provider-zod"

type TransformSwaggerSchemaData = Parameters<typeof jsonSchemaTransform>[0]

export function transformSwaggerSchema(data: TransformSwaggerSchemaData) {
  const { schema, url } = jsonSchemaTransform(data)

  if (schema.body === undefined) {
    schema.body = {
      type: "object",
      required: [],
      properties: {},
    }
  }

  schema.body.properties.file = {
    type: "string",
    format: "binary",
  }

  return { schema, url }
}
