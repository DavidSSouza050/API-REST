// ao colocar o .d no nome do arquivo, o ts script entende como arquivo de tipagens, onde as tipagens estará disponível para toda a aplicação
 // o namespace utilizando para organizar os arquivos para evitar conflito de nome
declare namespace Express{

  // dentro do express tem a tipagens do request
  // a interface pode ser juntada com outra já existente 
  export interface Request{
    user_id?: string // criando a propriedade use_id dentro do tipo request
  }

}