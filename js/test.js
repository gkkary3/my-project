// const up = document.getElementsByClassName("up");
const down1 = document.getElementsByClassName('down')[0];
const up1 = document.getElementsByClassName('up')[0];
const btn1 = document.getElementsByClassName('btn')[0];
const inner1 = document.getElementsByClassName('inner')[0];
btn1.addEventListener("click",function(){
  down1.classList.toggle("exit");
  up1.classList.toggle("active");
  // inner.style.display="block";
  inner1.classList.toggle("active");
});
const down2 = document.getElementsByClassName('down')[1];
const up2 = document.getElementsByClassName('up')[1];
const btn2 = document.getElementsByClassName('btn1')[0];
const inner2 = document.getElementsByClassName('inner')[1];
btn2.addEventListener("click",function(){
  down2.classList.toggle("exit");
  up2.classList.toggle("active");
  // inner.style.display="block";
  inner2.classList.toggle("active");
});
const down3 = document.getElementsByClassName('down')[2];
const up3 = document.getElementsByClassName('up')[2];
const btn3 = document.getElementsByClassName('btn2')[0];
const inner3 = document.getElementsByClassName('inner')[2];
btn3.addEventListener("click",function(){
  down3.classList.toggle("exit");
  up3.classList.toggle("active");
  // inner.style.display="block";
  inner3.classList.toggle("active");
});


// down.forEach(d => {
//   d.addEventListener('click', () => {
//     d.classList.toggle('exit')
//     up.forEach(c => {
//         c.classList.toggle('active')
//     })
//   })
// })


