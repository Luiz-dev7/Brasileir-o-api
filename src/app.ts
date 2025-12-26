import express from "express"
import router from "./routes/routes"
import cors from "cors"

import swaggerUi from "swagger-ui-express"
import YAML from "yamljs"
import path from "path"

export default function createApp() {
  const server = express()

  server.use(express.json())
  server.use(cors())

  // Swagger
  const swaggerDocument = YAML.load(
    path.resolve(process.cwd(), "src", "docs", "swagger.yaml")
  )

  server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

  // Rotas da API
  server.use("/api", router)

  return server
}
