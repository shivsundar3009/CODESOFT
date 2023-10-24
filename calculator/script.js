let blank = "";

let btns = document.querySelectorAll('.button');

let arr = Array.from(btns);

let inputField = document.getElementById("input");

arr.forEach((button)=>{
 button.addEventListener("click",(a)=>{
  if(a.target.innerText == "="){
    blank = eval(blank);
    inputField.value = blank;
  }
  else if(a.target.innerText == "C"){
      blank = "";
      inputField.value = blank;
  }
   else{
       blank = blank + a.target.innerText;
       inputField.value = blank;
   }

 })
})
