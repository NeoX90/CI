class CreatePost extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({mode: 'open'})
    }
    connectedCallback() {
        this._shadowDom.innerHTML = `
            <form id= 'create-post'>
                <textarea type='textarea' rows='4' class='text-area'></textarea>
                <button class='btnPost'>Post</button>
            </form>
        `
        let btnPost = this._shadowDom.querySelector('.btnPost')
        
        // this._shadowDom.querySelector('btnPost')
        // .addEventListener('click', () =>{
        //     firebase.firestore().collection('users').add(dataPost)
        // } )
        btnPost.addEventListener('click' , async (e)=>{
            e.preventDefault()
            let dataPost = this._shadowDom.querySelector('.text-area').value
            const post = {
                createBy: JSON.parse(localStorage.getItem('currentUser')).id,
                createAt: new Date(),
                content: dataPost,
                createName: JSON.parse(localStorage.getItem('currentUser')).name,
                isShow: true
            }
            // console.log(post.content)
            firebase.firestore().collection('posts').add(post)
            alert('port bai thanh cong')
        })
    }
}
window.customElements.define('create-post',CreatePost)