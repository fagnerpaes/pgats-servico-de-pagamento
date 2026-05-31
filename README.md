# Objetivo do Projeto

Esse projeto foi desenvolvido como avaliação da disciplina programação para automação de testes do curso de Post-Graduação em Automação de Testes (PGATS) promovido pelo Júlio de Lima.


# Serviço de Pagamento

Classe para gerenciar pagamentos com categorização automática baseada no valor.

## Descrição

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


Este projeto implementa uma classe `ServicoDePagamento` que possibilita:
- Realizar pagamentos com código de barras, empresa e valor
- Categorizar pagamentos automaticamente como "cara" (valor > 100.00) ou "padrão"
- Consultar o último pagamento realizado

## Instalação

```bash
npm install
```

## Executar Testes Unitários

Para executar os testes unitários, utilize o comando:

```bash
npm test
```

Os testes são executados com **Mocha** e **Node Assert**, validando:
- Pagamentos com categoria "cara" (valor > 100.00)
- Pagamentos com categoria "padrão" (valor ≤ 100.00)
- Consulta do último pagamento realizado

## Estrutura do Projeto

```
pgats-servico-de-pagamento/
├── src/
│   └── servicoDePagamento.js    # Classe principal
├── test/
│   └── servicoDePagamento.test.js   # Testes unitários
├── package.json
└── README.md
```

## Requisitos

- Node.js (versão 12 ou superior)
- npm

## Dependências

- **mocha**: Framework de testes
- **assert**: Módulo nativo do Node.js para assertions
