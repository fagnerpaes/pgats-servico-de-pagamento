/*
Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o último pagamento. 
Pagamentos serão armazenados como objetos Javascript dentro de uma lista de pagamentos. 
Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor. 
Quando um pagamento for realizado e o valor for maior que 100.00, o pagamento também terá a propriedade 
'categoria' preenchida pela função como 'cara', caso contrário, a propriedade 'categoria' será preenchida pela 
função como 'padrão'. O método de consultar trará apenas o último pagamento.
  
  ex. 
  const servicoDePagamento = new ServicoDePagamento();
  servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
  console.log(servicoDePagamento.consultarUltimoPagamento());
  {
     codigoBarras: '0987-7656-3475',
     empresa: 'Samar',
     valor: 56.87,
     categoria: 'cara'
  }
  
  A entregua deve ser realizada via Github e o repositório deve ter a classe a pasta src e os testes dos métodos dessa classe dentro da pasta test usando Mocha e Node Assert. 


#Pensamento Lógico (EPS)

 - Entradas: Código de Barras, Empresa e Valor
 - Regras: Se o valor for maior que 100.00, a categoria será 'cara', caso contrário, será 'padrão'
 - Processamento: Armazenar pagamentos em uma lista e preencher a propriedade 'categoria' com base no valor
 - Saídas: Objeto com as propriedades do pagamento e a categoria

#Algoritmo
1. Enviar o codigo de barras, empresa e valor para o método de pagamento
2. Verificar se o valor é maior que 100.00
3. Se for maior, definir a categoria como 'cara', caso contrário, definir como 'padrão'
4. Criar um objeto de pagamento com as propriedades: codigoBarras, empresa, valor e categoria
5. Armazenar o objeto de pagamento em uma lista de pagamentos
6. O método de consulta deve retornar o último pagamento da lista     

*/


export default class ServicoDePagamento {
    
    #pagamentos // Propriedade privada para armazenar os pagamentos
    constructor() {
       
       this.#pagamentos = []; // Inicializa a lista de pagamentos vazia
       
        // Inicializa a lista de pagamentos com alguns pagamentos pré-definidos
        /*
        this.#pagamentos = [ { codigoBarras: '0987-7656-3476', empresa: 'EmpresaA', valor: 156.87, categoria: 'cara' }, 
                             { codigoBarras: '1234-5678-9012', empresa: 'EmpresaB', valor: 50.00, categoria: 'padrão' }, 
                             { codigoBarras: '5678-9012-3456', empresa: 'EmpresaC', valor: 100.00, categoria: 'padrão' } ]; 
        */                               

    } 

    realizarPagamento(codigoBarras, empresa, valor) {
        const categoria = valor > 100.00 ? 'cara' : 'padrão';
        const pagamento = {
            codigoBarras,
            empresa,        
            valor,
            categoria
        };
        this.#pagamentos.push(pagamento);
        //console.log(this.#pagamentos);
    } 

    consultarUltimoPagamento() {
        console.log(this.#pagamentos.length);
        if (this.#pagamentos.length === 0) {
            return 'Não existem pagamentos registrados'; // Retorna mensagem se não houver pagamentos
        }   
        return this.#pagamentos[this.#pagamentos.length - 1]; // Retorna o último pagamento
        //return this.#pagamentos[0]; // Retorna o primeiro pagamento para falhar os testes.        
    }
}