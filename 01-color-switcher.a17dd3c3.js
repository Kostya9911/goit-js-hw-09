const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.style.fontSize="40px",e.style.fontSize="40px",e.setAttribute("disabled","disabled");let d=null;t.addEventListener("click",(()=>{t.setAttribute("disabled","disabled"),e.removeAttribute("disabled"),d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(()=>{t.removeAttribute("disabled"),e.setAttribute("disabled","disabled"),clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.a17dd3c3.js.map