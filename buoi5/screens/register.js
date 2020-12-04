import '../../utils.js'
const style =`
    <style>
        .register-container{
            display: flex;
            width: 100v;
            height :100vh;
            background: url('https://i.ytimg.com/vi/ZPEDIqYJyM4/maxresdefault.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            justify-content: flex-end;
        }
        #register-form{
            width: 30%;
            background: #fff;
            height: 100vh;
            
            
        }
        h1{
            text-align: center;
            color: #333;
        }
    </style>
`
class RegisterScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML =`
        ${style}
            <div class='register-container'>
                <form id="register-form">
                <h1>CI Project</h1>
                <input-wrapper id="first-name" type="text" placeholder="First Name"></input-wrapper>
                <input-wrapper id="last-name" type="text" placeholder="Last Name"></input-wrapper>
                <input-wrapper id="email" type="text" placeholder="Email"></input-wrapper>
                <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
                <input-wrapper id="confirm-password" type="password" placeholder="Confirm password"></input-wrapper>
                <button>Register</button>
                </form>
            </div>
        `
        const registerForm = this._shadowRoot.getElementById('register-form')
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault()
            let firstName = this._shadowRoot.getElementById('first-name').value
            let lastName = this._shadowRoot.getElementById('last-name').value
            let emailValue = this._shadowRoot.getElementById('email').value
            let passwordValue = CryptoJS.MD5(this._shadowRoot.getElementById('password').value)
            function addDocument(){
                const data ={
                    name : `${firstName+" "+ lastName}`,
                    email : `${emailValue}`,
                    password : `${passwordValue}`
                }
                firebase.firestore().collection('users').add(data)
            }
            addDocument()
            // let  this._shadowRoot.getElementById('confirm-password').value

        })
    }
}
window.customElements.define('register-screen',RegisterScreen)