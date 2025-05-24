import express, { Request, Response, NextFunction } from "express"

import { routes } from "./routes" // por padrão, já é entendido que o arquivo que será importado será o index

import { AppError } from "./utils/app-error"

const PORT = 3333 //colocando em letra maiúscula para definir uma constante de configuração

const app = express() // inicializando o express, onde a app terá os recursos do express

app.use(express.json()) // informando para a API que será usado o JSON para representar os dados

app.use(routes) // mapiando as rotas

// aplica o middleware para todas as rotas abaixo dele
//app.use(myMiddleware) // executando o middleware globalmente obs.: caso seja colocado depois de alguma requisição ele será executado apenas quando chamar a requisição após o middleware

// o tratamento de exceção precisa ser criada após todas as configurações serem definidas, pois ela será capaz de capturar qualquer exceção que tenha acontecido antes na pilha de execução
/**
 * 400 (Bad request) Erro do cliente
 * 500 (Internal Server Error): Erro interno do servidor
 */
app.use((error: any, request: Request, response: Response, _: NextFunction) => {

  if(error instanceof AppError){
    response.status(error.statusCode).json({message: error.message})
    return
  }
  response.status(500).json({message: error.message})
  return
})

app.listen(PORT, () => console.log(`Server is running at on port ${PORT}`))