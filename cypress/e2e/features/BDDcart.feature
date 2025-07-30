
Feature: Teste em um site Ecommerce fake - Validar carrinho

    # Scenario Outline: Ir para o carrinho
    #     Given ja tenha acessado o site
    #     When  clicar no botão do "<btnCart>" no header
    #     Then  validar ir para o carrinho de compras

    # Examples:
    #     | btnCart       |
    #     | carrinho      |

    
    # Scenario Outline: Clicar no botão de continuar comprando
    #     Given ja esteja no carrinho de compras
    #     When  clicar no botão Continue Shopping
    #     Then  deve ir para a página "<titlePage>"

    #     Examples:
    #     | titlePage     |
    #     | Products      |

    Scenario Outline: Deve validar o produto no carrinho
        Given que tenha adicionado um produto no carrinho
        When  clicar no botão do "<btnCart>" no header
        Then  deve validar o produtos no carrinho

        Examples:
            | btnCart       |
            | carrinho      |
