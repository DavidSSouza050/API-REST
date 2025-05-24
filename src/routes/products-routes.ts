import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";
import { ProductsController } from "../controllers/products-controller";

const productsRoutes = Router()
const productsController = new ProductsController()
// ao colocar o use("/products") no arquivo index, ele já entende que será direcionado para este arquivo, então o que irá diferenciar as rotas de produtos será o método (get, post, put, etc)

productsRoutes.get("/", productsController.index) //foi criado uma class de controle para obter os métodos para ser executado

// o middleware está sendo executado de forma local, e com o NextFunction, ele irá chamar a próxima função que será executada, no caso, o retorno da requisição post (é possível colocar mais de um middleware, um após o outro)
productsRoutes.post("/", myMiddleware, productsController.create)

export { productsRoutes }