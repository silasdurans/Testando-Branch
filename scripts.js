// scripts.js - comportamento mínimo
document.addEventListener('DOMContentLoaded',function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if(!toggle || !nav) return;
  toggle.addEventListener('click',()=>{
    const shown = nav.style.display === 'flex' || nav.classList.contains('open');
    if(shown){
      nav.style.display = '';
      nav.classList.remove('open');
    } else {
      nav.style.display = 'flex';
      nav.classList.add('open');
    }
  });
});
