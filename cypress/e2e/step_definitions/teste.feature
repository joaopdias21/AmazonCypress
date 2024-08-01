Feature: Testes Amazon

	Scenario: 1. Test Pesquisar Produto
		Given que acesso o site da Amazon
		When pesquiso um produto por uma palavra chave e clico em enter
 		Then os produtos devem aparecer

	Scenario: 2. Test Login
		Given que acesso o site da Amazon e vou me logar
		When insiro meu usuario e senha
 		Then devo me logar na plataforma

	Scenario: 2. Test Login Senha Incorreta
		Given que acesso o site da Amazon e vou me logar
		When insiro meu usuario e senha
 		Then deve exibir mensagem de senha incorreta

	Scenario: 3. Test Adicionar ao Carrinho
 		Given que estou logado na plataforma da Amazon
 		When pesquiso o produto alexa e adiciono ele ao carrinho
		Then o produto deve ser adicionado ao carrinho

	

	Scenario: 4. Test Validar produtos no carrinho
    	Given que estou logado na plataforma da Amazon
    	When no icone do carrinho
    	Then devo ver meus produtos no carrinho

	Scenario: 5. Test Ordenar Produtos
    	Given que acesso o site da Amazon e pesquiso algum produto
    	When clico em Classsificar por:  Preço: Do menor para o Maior
    	Then deve ordenar os produtos de forma crescente