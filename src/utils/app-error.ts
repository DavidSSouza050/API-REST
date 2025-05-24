// Class para diferenciar o erro gerado pelo cliente ou pelo servidor

class AppError{

  message: string
  statusCode: number

  constructor(message: string, statusCode: number = 400){
    this.message = message
    this.statusCode = statusCode
  }

}   


export {AppError}