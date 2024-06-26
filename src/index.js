import express from 'express'
import morgan from 'morgan'
import { PORT } from './config/config.js'
import usuariosRoutes from './routes/usuarios.routes.js'
import administradorRoutes from './routes/administrador.routes.js'
import swaggerUI from 'swagger-ui-express'
import jsonDocs from './config/swagger-output.json' assert { type: 'json'}
const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/api/user', usuariosRoutes)
app.use('/api/admin', administradorRoutes)

app.use('/documentation', swaggerUI.serve, swaggerUI.setup(jsonDocs))

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
