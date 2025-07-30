
class LoginElements {

inputUserName = () => {return '#user-name'}
inputPassword = () => {return '#password'}

genericInput  = (id) => {return `input[data-test=${id}]`}

inputButton   = () => {return '#login-button'}

titlePage     = () => {return '.title','Products'}
erroMessage   = () => {return 'h3[data-test=error]'}

loginLogo     = () => { return '.login_logo'}

} export default LoginElements