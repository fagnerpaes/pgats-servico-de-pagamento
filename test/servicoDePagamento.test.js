import ServicoDePagamento from '../src/servicoDePagamento.js';
import assert from 'assert';

describe('Classe de Servico de Pagamento', function() {

    it('Validar que o pagamento é adicionado como último pagamento da lista com categoria cara', function() {
        
        //Arrange
        const servicoDePagamento = new ServicoDePagamento();
        
        //Act
        servicoDePagamento.realizarPagamento('0987-7656-3476', 'EmpresaA', 150.00);
        servicoDePagamento.realizarPagamento('1234-5678-9012', 'EmpresaB', 50.00);
        servicoDePagamento.realizarPagamento('5678-9012-3456', 'EmpresaC', 100.00);
        servicoDePagamento.realizarPagamento('0987-7656-3475', 'Samar', 156.87);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();
        
        //Assert
        assert.strictEqual(ultimoPagamento.codigoBarras, '0987-7656-3475');
        assert.strictEqual(ultimoPagamento.empresa, 'Samar');
        assert.strictEqual(ultimoPagamento.valor, 156.87);
        assert.strictEqual(ultimoPagamento.categoria, 'cara');
        console.log(ultimoPagamento);
    });

    it('Validar que o pagamento é adicionado como último pagamento da lista com categoria padrão', function() {
        //Arrange
        const servicoDePagamento = new ServicoDePagamento();
        
        //Act
        servicoDePagamento.realizarPagamento('0987-7656-3476', 'EmpresaA', 150.00);
        servicoDePagamento.realizarPagamento('1234-5678-9012', 'EmpresaB', 50.00);
        servicoDePagamento.realizarPagamento('5678-9012-3456', 'EmpresaC', 100.00);
        servicoDePagamento.realizarPagamento('1234-5678-9012', 'EmpresaX', 50.00);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();
        
        //Assert
        assert.strictEqual(ultimoPagamento.codigoBarras, '1234-5678-9012');
        assert.strictEqual(ultimoPagamento.empresa, 'EmpresaX');
        assert.strictEqual(ultimoPagamento.valor, 50.00);
        assert.strictEqual(ultimoPagamento.categoria, 'padrão');
        console.log(ultimoPagamento);

    });

    it('Validar que o pagamento é adicionado como último pagamento da lista com categoria padrão com valor exatamente 100.00', function() {
        //Arrange
        const servicoDePagamento = new ServicoDePagamento();
        //Act
        servicoDePagamento.realizarPagamento('0987-7656-3476', 'EmpresaA', 150.00);
        servicoDePagamento.realizarPagamento('1234-5678-9012', 'EmpresaB', 50.00);
        servicoDePagamento.realizarPagamento('5678-9012-3456', 'EmpresaC', 100.00);
        servicoDePagamento.realizarPagamento('5678-9012-3456', 'EmpresaY', 100.00);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();
        //Assert
        assert.strictEqual(ultimoPagamento.codigoBarras, '5678-9012-3456');
        assert.strictEqual(ultimoPagamento.empresa, 'EmpresaY');
        assert.strictEqual(ultimoPagamento.valor, 100.00);
        assert.strictEqual(ultimoPagamento.categoria, 'padrão');
        console.log(ultimoPagamento);
    });

    it('Validar que o método de consulta retorna mensagem quando não há pagamentos', function() {
        //Arrange
        const servicoDePagamento = new ServicoDePagamento();        
        //Act
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();
        //Assert
        assert.strictEqual(ultimoPagamento, 'Não existem pagamentos registrados');
    });
});
