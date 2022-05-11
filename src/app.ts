import "express-async-errors"
import "dotenv/config"
import express from 'express'
import { appRoutes } from './routes/index.routes';
import errorHandlingMiddleware from "./middleware/errorHandling.middleware"

const app = express()

app.use(express.json())

appRoutes(app)

app.use(errorHandlingMiddleware)

//app.listen(3000, () => {console.log("App running at port 3000")})

export default app