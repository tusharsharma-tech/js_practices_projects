let parent=document.querySelector(".parent");
function createToaster(config){
      return function(str){
         let div = document.createElement("div");
          div.textContent = str;
          div.className = `inline-block  ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none font-bold
          `;
          parent.appendChild(div);
           parent.className += "fixed";
         if(config.positionX !== "left" || config.positionY !== "top"){
                
             parent.className += ` ${config.positionX === "right" ? "right-5" : "left-5"} ${config.positionY === "bottom" ? "bottom-5": "top-5"}`;

            }



        setTimeout(() => {
            parent.removeChild(div);
        },config.duration * 1000);



      };
}

let Toaster = createToaster(
    { positionX: "right",
     positionY: "top",
     theme:"dark",
     duration: 3}
);

Toaster("this is a toast notification");
setTimeout(()=>{
    Toaster("download done");
}, 2000);