import createApp from "./app"

const server = createApp()
const port = process.env.PORT


server.listen(port, ()=>{
    console.log(`Servidor ligado na porta ${port}\n`)
    console.log(`Swagger disponivel em http://localhost${port}/docs`)
})