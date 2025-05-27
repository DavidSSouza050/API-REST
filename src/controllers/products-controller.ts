import { Request, Response } from "express"
import { AppError } from "../utils/app-error"
import { z } from "zod"

class ProductsController{


  index(request:Request, response:Response) {
    const {page, limit} = request.query

    response.send(`Página ${page} de ${limit}`)
  }

  create(request:Request, response:Response) {


    const bodySchema = z.object({
      name: z
      .string({required_error: "Name is required"})
      .trim()
      .min(6, {message: "Name must be 6 or more character"}),
      price: z
      .number({required_error: "Price is required"})
      .positive({message: "Price must be positive"})
      
    })
    //.nullish() informa que a propriedade pode ser nulo, ou seja, opcional
    // .gte(10) valida se algum numero é menor ou igual a número informado no método
   const {name, price} = bodySchema.parse(request.body)
   

    // if(!name || !price){
    //   throw new AppError("Nome e preço do produto é obrigatório")
    // }

  
    //throw new Error("Erro ao tentar criar um produto")
    //throw new AppError("Erro ao tentar criar um produto")

    response.status(201).json({name, price, user_id: request.user_id}) 
  }
}

export { ProductsController }