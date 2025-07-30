
Feature: Teste em um site Ecommerce fake - Validar o header da pagina

    Scenario Outline: Validar texto da logo do header
        Given que tenha feito o login
        When  o header for exibido
        Then  o texto da logo deve ser exibido "<textLogo>"

        Examples:
        | textLogo  |
        | Swag Labs |

    Scenario Outline: Validar elementos do header 
        Given que tenha feito o login
        When  o header for exibido 
        Then  deve exibir o botão "<button>"

        Examples:
            | button     |
            | menu       |
            | carrinho   |
            | ordenação  |

    Scenario Outline: Deve clicar no botão do carrinho
        Given que tenha feito o login
        When  clicar no botão do "<btn>"
        Then  deve direcionar para a pagina do carrinho

        Examples:
            | btn      |
            | carrinho |

    Scenario Outline: Validar menu lateral do header
        Given que tenha feito o login
        When  clicar no botão do "<menu>" lateral
        Then  deve expandir o menu lateral com a opção "<options>"

        Examples:
            | menu      | options           |
            | menu      | All Items         |
            | menu      | About             |
            | menu      | Logout            |
            | menu      | Reset App State   |


    Scenario Outline: Clicar na opção "<optionsMenu>" do menu lateral
        Given que tenha feito o login
        When  clicar no "<menu>" lateral
        And   clicar na opção "<optionsMenu>"
        Then  "<then>"

        Examples:
            | menu | optionsMenu   | then                        |
            | menu | Logout        | deve deslogar o usuário     |


    Scenario Outline: Voltar a lista de produtos pelo menu
        Given que deseja voltar a lista de produtos
        When  clicar no "<menu>"
        And   depois em "<options>"
        Then  deve voltar para a pagina de produtos "<title>"

        Examples:
            | menu  | options   | title     |
            | menu  | All Items | Products  |
            
    Scenario Outline: Deve mudar a ordenação "<ordernation>" na lista de produtos
        Given que esteja na tela de "<titlePage>"
        When  clicar no botão de ordenação "<btnOrder>"
        And   escolher a rodenação de "<orderType>"
        Then  deve organizar a lista "<orderList>"
        

        Examples:
            | btnOrder  | ordernation | titlePage | orderType              | orderList       |
            | ordenação | alfabetica | Products   | Name (A to Z)          | de A a Z        |
            | ordenação | por preço  | Products   | Price (low to high)    | por menor preço |
            | ordenação | alfabetica | Products   | Name (Z to A)          | de Z a A        |
            | ordenação | por preço  | Products   | Price (high to low)    | por maior preço |
            
             


    