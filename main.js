let inp1 =document.querySelector('#inp1')
let inp2 =document.getElementById('inp2');
let btn =document.getElementById('btn');
inp2.addEventListener('input', ()=> {
  if (inp1.value.trim() !== '') {
      btn.style.backgroundColor = 'green';  
  } else {
      btn.style.backgroundColor = 'orange';  
  }
});

let x =document.querySelector('h1')

btn.addEventListener('click', ()=>{
  if(inp1.value ==11 && inp2.value ==22){
    window.location.href ='index2.html'
  }else{
    x.innerHtml = 'bunday akkaunt mavjud emas'
}});
