import { Request, Response } from "express"
import { AppError } from "../utils/app-error"

class ProductsController{


  index(request:Request, response:Response) {
    const {page, limit} = request.query

    response.send(`Página ${page} de ${limit}`)
  }

  create(request:Request, response:Response) {
    const {name, price} = request.body
    
    if(!name || !price){
      throw new AppError("Nome e preço do produto é obrigatório")
    }

    //throw new Error("Erro ao tentar criar um produto")
    //throw new AppError("Erro ao tentar criar um produto")

    response.status(201).json({name, price, user_id: request.user_id}) 
  }
}

export { ProductsController }