document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

});

});

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

header.style.background=window.scrollY>50
? "rgba(0,0,0,.6)"
: "rgba(255,255,255,.05)";

});