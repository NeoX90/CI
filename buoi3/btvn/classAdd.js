class StudentColection{
    listStudent;
    current;
    constructor(){
        this.listStudent =[];
        this.current = 0;

    }
    addStudent(student){
        this.listStudent.push(student)
        console.log(this.listStudent)
    }
    show() {
        document.querySelector(`#container`).innerHTML = this.listStudent.map((student) =>student.toHtml())
    }  
    // sth new in here
}
export{StudentColection}