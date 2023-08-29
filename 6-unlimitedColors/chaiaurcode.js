const bodyColor = document.querySelector('body');
const randomColors = ()=>{
  const hex = '123456789ABCDEF';
  let color = '#';
  for(let i=0; i<6; i++){
     color += hex[Math.floor(Math.random()*16)]
     console.log(color)
  }
  return color

}
let interval;
const startChanging = ()=>{
  if(!interval){
  interval =setInterval(changeColor,1000)
  }
}

const stopChanging = ()=>{
   clearInterval(interval)
   interval = null;
}
const changeColor = ()=>{
  bodyColor.style.backgroundColor = randomColors()
  }
document.querySelector('#start').addEventListener('click',startChanging)
document.querySelector('#stop').addEventListener('click',stopChanging)

