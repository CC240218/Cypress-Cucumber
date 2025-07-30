
Feature: Teste em um site Ecommerce fake - Login de usuario

Scenario Outline: Logar no site com sucesso
    Given que esteja na pagina de login da "<logo>"
    When  digitar nos respectivos campos Username "<name>" e Password "<password>"
    And   clicar no botão Login
    Then  o site deve logar com sucesso a page "<titlePage>"

    Examples:
        | logo     | name             | password          | titlePage  |
        | Swag Labs| standard_user    | secret_sauce      | Products   |


Scenario Outline: "<scenario>"
    Given que esteja na pagina de login
    When  clicar no botão Login "<inputs>" "<text>"
    Then  o site deve exibir mensagem de erro "<erroMessage>"

    Examples:
        | scenario                                  | text              | inputs   | erroMessage                                                  |
        | Não deve logar com o campo name vazio     | secret_sauce      | password |  Username is required                                        |
        | Não deve logar com o campo password vazio | standard_user     | username |  Password is required                                        |
        | Nao deve logar com ambos os campos vazios |                   |          |  Username is required                                        |


Scenario Outline: "<scenario>"
    Given que esteja na pagina de login
    When  digitar nos campos username "<name>" e password "<password>"
    And   clicar no botão de Login
    Then  o site deve exibir mensagem de erro "<erroMessage>"

    Examples:
        | scenario                                  | name            | password      | erroMessage                                                   |
        | Nao deve logar com o campo name invalido  | nome errado     | standard_user |  Username and password do not match any user in this service  |
        | Nao deve logar com o campo password invalido | senha errada | secret_sauce  |  Username and password do not match any user in this service  |