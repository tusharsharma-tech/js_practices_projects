let count=0
let second = 4
let progressbar = document.querySelector("#progress")
let progresstext = document.querySelector("#progress-text")
let intveral = setInterval(function(){
    if(count<=99){
        count ++ 
     progress.style.width = `${count}%`;
     progresstext.textContent = `${count}%`;
    }
    else{
        document.querySelector("#download").textContent = "downloaded"
        clearInterval(intveral)
    }
},(second*1000)/100)