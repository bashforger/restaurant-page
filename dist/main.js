(()=>{"use strict";const e=(e,t,n,o)=>{const a=document.createElement(e);return a.innerText=n,Object.keys(t).forEach((e=>a.setAttribute(e,t[e]))),document.getElementById(o).appendChild(a),a},t=()=>{const e=document.getElementById("content");e.childNodes.length>1&&e.removeChild(e.lastElementChild)},n=()=>{t(),e("section",{class:"text-gray-600 body-font",id:"home"},"","content"),e("div",{class:"container mx-auto flex px-5 py-24 md:flex-row flex-col items-center",id:"home-container"},"","home"),e("div",{class:"lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center",id:"home-description"},"","home-container"),e("h1",{class:"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"},"My Restaurant","home-description"),e("p",{class:"mb-8 leading-relaxed"},"Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.","home-description"),e("div",{class:"flex justify-center",id:"action-buttons"},"","home-description"),e("button",{class:"inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"},"Button","action-buttons"),e("button",{class:"ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"},"Button","action-buttons"),e("div",{class:"lg:max-w-lg lg:w-full md:w-1/2 w-5/6",id:"img-container"},"","home-container"),e("img",{class:"object-cover object-center rounded",alt:"hero",src:"https://dummyimage.com/720x600"},"","img-container")},o={Home:n,Menu:()=>{t(),e("section",{class:"text-gray-600 body-font",id:"menu"},"","content"),e("section",{class:"container px-5 py-5 mx-auto",id:"menu-container"},"","menu"),e("h1",{class:"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"},"My Menu","menu-container"),e("ul",{class:"list-outside md:list-inside",id:"menu-ul"},"","menu-container");for(let t=1;t<7;t+=1)e("li",{class:"list-disc"},`Menu item ${t}`,"menu-ul")},Contact:()=>{t(),e("section",{class:"text-gray-600 body-font",id:"contact"},"","content"),e("div",{class:"container px-5 py-5 mx-auto max-w-lg",id:"menu-container"},"","contact"),e("h1",{class:"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"},"Contect","menu-container"),e("p",{class:"leading-relaxed mb-5 text-gray-600"},"Post-ironic portland shabby chic echo park, banjo fashion axe","menu-container"),e("div",{class:"relative mb-4",id:"email-container"},"","menu-container"),e("label",{for:"email",class:"leading-7 text-sm text-gray-600"},"Email","email-container"),e("input",{type:"email",id:"email",class:"w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"},"","email-container"),e("div",{class:"relative mb-4",id:"message-container"},"","menu-container"),e("label",{for:"message",class:"leading-7 text-sm text-gray-600"},"Message","message-container"),e("textarea",{type:"message",id:"message",class:"w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"},"","message-container"),e("button",{class:"text-white w-full bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"},"Submit","menu-container"),e("p",{class:"text-xs text-gray-500 mt-3"},"Chicharrones blog helvetica normcore iceland tousled brook viral artisan.","menu-container")}};e("header",{class:"text-gray-600 body-font",id:"header"},"","content"),e("div",{class:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",id:"headercontainer"},"","header"),e("a",{class:"title-font cursor-pointer font-medium items-center text-gray-900",href:"#"},"Le-Hotel","headercontainer"),e("nav",{class:"md:ml-auto flex flex-wrap items-center text-base justify-center",id:"headerlinks"},"","headercontainer"),Object.keys(o).forEach((t=>e("a",{class:"mr-5 hover:text-gray-900 cursor-pointer",id:t},t,"headercontainer").addEventListener("click",o[t]))),n()})();