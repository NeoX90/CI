// // bai1
// let a = prompt('nhap vao nam : ');
// function check(a){
//   if(a%100 == 0){
//     console.log(a/100);
//   }
// else if(a% 100 != 0){
//   let x = Math.floor(a/100);
//   console.log(x+1)
// }
// }
// check(a);
// // bai 2
// let a = prompt('day n : ');
// let b =a.length;
// for(let i = 0 ; i< b/2 ; i++){
//   if(a[i] == a[b - i -1]){
//     console.log("true")
//   }
//   else{
//     console.log("f")
//   }
// }
// // bai3
// var arr = [3,6,-2,-5,7,3];

//   let x =arr.length ;
//   // console.log()
//   for(let i = 0 ; i< x ; i++){
//     var temp = arr[i]*arr[i-1];
//     // console.log(temp)
//     if(arr[i]*arr[i+1] > temp){
//       temp = arr[i]*arr[i+1];
      
//     }  
//   }
// console.log(temp);
// // bai4
// let a = [3,6,1,5,8,7,9,0];
// console.log(a.filter(a => a%2 == 0))

let yesDiv = document.getElementById('yes')
let noDiv = document.getElementById('no')
let answers = document.getElementById('answer');
yesDiv.addEventListener('click',()=>{
    alert('hello pro');
});

noDiv.onmouseover = () => answers.classList.toggle('reverse');