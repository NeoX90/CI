const style =`
    <style>
        .card{
            font-family:sans-serif;
            border: 1px solid black;
            margin-right:5vh;
            color:#363636
        }
        .title{
            font-size: 1.5rem;
            font-weight: 600;

        }
        .card-body{
            border-top: 1px solid black;

        }
        img{
            width:100%;
        }
    </style>
`
class cardComponent extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode: 'open'});
        this.imgSrc = this.getAttribute('imgSrc');
        this.titleSrc = this.getAttribute('titleSrc');
        this.desSrc = this.getAttribute('desSrc');
        this._shadowDom.innerHTML = 
        `
        ${style}
            <div class='card'>
                <img src ='${this.imgSrc}'>
                <div class='card-body'>
                    <div class='title'>${this.titleSrc}</div>
                    <div class='description'>${this.desSrc}</div>
                </div>
            </div>
        `
    }
}
window.customElements.define('card-container',cardComponent)