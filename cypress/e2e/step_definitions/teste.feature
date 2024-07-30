Feature: Testes Amazon

	Scenario: 1. Test Adicionar ao Carrinho
 		Given que estou logado na plataforma da Amazon
 		When pesquiso o produto alexa e adiciono ele ao carrinho
		Then o produto deve ser adicionado ao carrinho

	Scenario: 2. Test Pesquisar Produto
		Given que acesso o site da Amazon
		When pesquiso um produto por uma palavra chave e clico em enter
 		Then os produtos devem aparecer

	Scenario: 3. Test Ordenar Produtos
    	Given que acesso o site da Amazon e pesquiso algum produto
    	When clico em Classsificar por:  Preço: Do menor para o Maior
    	Then deve ordenar os produtos de forma crescente