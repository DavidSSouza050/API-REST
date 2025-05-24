// arquivo organizador das rotas
import { Router } from "express"

import { productsRoutes } from "./products-routes"

const routes = Router()

routes.use("/products", productsRoutes) // pode tirar o /products da requisição no arquivo de rotas de products, pois ele já irá reconhecer o caminho

export { routes }