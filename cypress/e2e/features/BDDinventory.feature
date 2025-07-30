
Feature: Teste em um site Ecommerce fake - Inventário de produtos

  Scenario: Validar lista de produtos na pagina
    Given que ja tenha feito login na pagina
    When  acessar a pagina de inventario
    Then  o site deve exibir uma coleção de produtos


  Scenario: Atributos do card de produtos
    Given que esteja na pagina de inventario
    When  exibir os produtos 
    Then  o card do produto deve conter titulo, preço, imagem e descrição

  
    
  Scenario Outline: "<Scenario>"
    Given que esteja na pagina de inventario
    When  clicar no botão "<nameButton>"
    Then  deve adicionar o produto no cart
    And   e mudar seu texto para "<textButton>"

    Examples:
    | Scenario                                     | nameButton  | textButton |
    | Adicionar ao carrinho na tela do inventario  | Add to cart | Remove     |
    | Remover do carrinho na tela do inventario    | Remove      | Add to cart |
      
  


      

