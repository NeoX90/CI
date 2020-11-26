const style = `
    <style>
        .card{
            font-family: sans-serif;
            border: 1px solid #dbdbdb;
            margin-right: 20px;
            color: #363636
        } 
        .title{
            font-size: 1.5rem;
            font-weight : 600;

        }
        .card-body{
            border-top: 1px solid #dbdbdb;
        }
        img{
            width: 200px;
        }
    </style>
    `

class CardComponent extends HTMLElement{
    constructor() {
        super()
        // khai bao shadow_dom
        this._shadowDom = this.attachShadow({mode: 'open'})
        this.imgSrc = this.getAttribute('imgsrc')
        this.titleSrc = this.getAttribute('titlesrc')
        this.desSrc = this.getAttribute('desSrc')
        this._shadowDom.innerHTML = `
        ${style}
            <div class='card'>
                <img src="${this.imgSrc}">
                <div class='card-body'>
                    <div class='title'>${this.titleSrc}</div>
                    <div class='description'>${this.desSrc}</div>
                </div>
            </div>
        `
    }
}
window.customElements.define('card-container',CardComponent)