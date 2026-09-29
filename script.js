const menu=document.getElementById("menu"), links=document.getElementById("navLinks");
if(menu) menu.addEventListener("click",()=>{links.style.display=links.style.display==="flex"?"none":"flex";links.style.position="absolute";links.style.top="76px";links.style.left="0";links.style.right="0";links.style.padding="25px";links.style.background="#07100d";links.style.flexDirection="column"});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",()=>{if(links)links.style.display=""}));
