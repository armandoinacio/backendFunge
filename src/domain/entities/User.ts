export class User {
    constructor(
      public nome: string,
      public telefone: string,
      public senha: string,
      public bairro: string,
      public municipio: string,
      public nucleos: number,
      public frequencia: string,
      public metodoEntrega: string,
      public pagamento: string,
      public modeloPagamento: string,
      public enderecoEntrega?: string,
      public restricoes?: string[],
      public newsletter?: boolean
    ) {}
  }
  