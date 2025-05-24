import { Request, Response, NextFunction } from "express";

export function myMiddleware(request: Request, response: Response, next: NextFunction){
   console.log("Passou pelo middleware!")

   request.user_id = "123456" // ao criar a pasta types e o arquivo request, informando que o tipo Request terá o id do usuário no momento em que a requisição ser realizada

   return next() // o next irá executar a próxima função após o funcionamento do middleware
}