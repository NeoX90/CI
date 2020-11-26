class Users {
    name;
    age;
    gender;
    description;
    image;
    constructor(name,age,gender,description,image){
        this.name =name;
        this.age =age;
        this.gender =gender;
        this.description =description;
        this.image =image;
    }
    toHtml() {
        return `
        <div class = "user-container">
            <div class ='previos'> < </div>
            
            <div class =''> 
                <img src= ${this.image} >
                <div class = "infor">
                    ${this.name}
                    ${this.age}
                    ${this.description}
                </div>
            </div>
            <div class ='next'> > </div>
        </div>
        `
    }
}
class UserColection{
    listUser;
    current;
    constructor(){
        this.listUser = [];
        this.current= 0;
    }
    addUser(user) {
        this.listUser.push(user)
    }
    removeUser(index) {
        this.listUser.splice(index,1)
    }
    show() {
        document.querySelector(`#app`).innerHTML = this.listUser[0].toHtml()
        this.listUserClick()
    }
    previous() {
        
        if(this.current > 0){
            this.current--
            this.show()
        }
        
    }   
    next() {
        if(this.current < this.listUser.length -1){
            this.current++
            this.show()
        }
        
    }
    listUserClick(){
        document.querySelector(`.previous`).addEventListener('click',()=>{
            userColection.previous()
        })
        document.querySelector(`.next`).addEventListener('click',()=>{
            userColection.next()
        })
    }
}
const userColection = new UserColection()
const user1 = new Users('Donal J.Trump',76,`Male`,`he makes a lot of meme`,`https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg`)
const user2 = new Users(`Vladimir Putin`,68,`Male`,`he makes a lot of meme`,`https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2018%2F07%2Fcaballo.jpg`)
userColection.addUser(user1)
userColection.show()
