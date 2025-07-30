
Feature: Detalhamento do produto

    Scenario: "<Scenario>"
        Given que esteja na pagina do inventario
        When  clicar no produto atravez do "<atribute>" 
        Then  deve ser redirecionado para a pagina de detalhes do produto

    Examples:
        | Scenario                               | atribute |
        | Acessar a PDP do produto pelo titulo   | titulo   |
        | Acessar a PDP do produto pela imagem   | imagem   |

    
    Scenario: Validar informações da pdp do item
        Given esteja na pdp do produto
        When  exibir o item na pagina
        Then deve exibir informações como titulo, descrição, valor e imagem do item

     Scenario: "<scenario>"
            Given que esteja na pdp do produto
            When  clicar em "<nameButton>"
            Then  o produto deve ser "<action>" do carrinho

            Examples:
            | scenario                                  | nameButton      | action     |
            | Adicionar produto ao carrinho pela pdp    | Add to cart     | adicionado |
            | Remover produto do carrinho               | Remove          | Retirado   |

     Scenario: Validar mudança no nome do botão apos o click
        Given que esteja na pdp do produto
        When  clicar em "<nameButton>"
        Then  o nome do botão deve mudar para "<nameButton>"

        Examples:
            | nameButton  | 
            | Add to cart |
            | Remove      |
    
