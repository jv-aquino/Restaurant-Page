(()=>{"use strict";const e=e=>{let t=[];switch(e.nodeName){case"NAV":t=["text-zinc-50","bg-zinc-900","mb-9"];break;case"UL":t=["flex","text-2xl","flex-row","justify-center","gap-3","p-5"]}t.forEach((t=>{e.classList.add(t)}))},t=document.querySelector("#content");(()=>{const n=(()=>{const t=document.createElement("nav"),n=document.createElement("ul");return["Home","Menu","Contact"].forEach((e=>{const t=document.createElement("li");t.textContent=e,n.appendChild(t)})),e(n),e(t),t.appendChild(n),t})();t.appendChild(n)})()})();