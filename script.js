let addnote = document.querySelector("#addBtn");
let formContainer = document.querySelector(".modal-overlay");
let closebtn = document.querySelector(".btn-close");
let form = document.querySelector("form");
let img = document.querySelector("#imgUrl");
let fullname = document.querySelector("#fullName");
let homeTown = document.querySelector("#homeTown");
let purpose = document.querySelector("#purpose");
let category = document.querySelectorAll("input[name='category']");
let createbtn = document.querySelector(".btn-create");
let stack=document.querySelector(".card-wrapper");
let upbtn=document.querySelector("#upBtn");
let downbtn=document.querySelector("#downBtn");


function saveToLocalStorage(obj){
    //purane storage se data featch
    if(localStorage.getItem("tasks")===null){
        let oldTasks = [];
      oldTasks.push(obj);
      
      localStorage.setItem("tasks",JSON.stringify(oldTasks));
    } else{
      let oldTasks = localStorage.getItem("tasks");
      oldTasks =JSON.parse(oldTasks);
      oldTasks.push(obj);
      localStorage.setItem("tasks",JSON.stringify(oldTasks));
    }
}


addnote.addEventListener("click",function(){
    formContainer.style.display = "flex"
});
closebtn.addEventListener("click",function(){
    formContainer.style.display = "none"
});

form.addEventListener("submit",function(evt){
   evt.preventDefault();

   const imgurl = img.value.trim();
   const Name = fullname.value.trim();
   const home = homeTown.value.trim();
   const purposer = purpose.value.trim();


   let selected=false;
   category.forEach(function(cat){
    if(cat.checked){
        selected = cat.value;
    }
   });

   if(imgurl===""){
    alert("please enter image url");
    return;
   }
   if(Name===""){
    alert("please enter name");
    return;
   }
   if(home===""){
    alert("please enter home");
    return;
   }
   if(purposer===""){
    alert("please enter purpose");
    return;
   }
   if(!selected){
    alert("please select category");
    return;
   }
   saveToLocalStorage({
    imgurl,
    Name,
    purposer,
    home,
    selected,
   });

   form.reset();
   formContainer.style.display = "none";

showCards();
});




function showCards(){
        let alltasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const cardWrapper = document.querySelector(".card-wrapper");
        cardWrapper.querySelectorAll(".profile-card").forEach(function(card) {
            card.remove();
        });

        alltasks.slice().reverse().forEach(function(task, index){

const profileCard = document.createElement("div");
profileCard.className = "profile-card";
    if (index === 0) {
      profileCard.classList.add("card-enter");
    }

// Avatar Header
const cardHeader = document.createElement("div");
cardHeader.className = "card-header";

const avatarImg = document.createElement("img");
avatarImg.className = "avatar";
avatarImg.src = task.imgurl;
avatarImg.alt = "Profile";

cardHeader.appendChild(avatarImg);

// User Name
const userName = document.createElement("h2");
userName.className = "user-name";
userName.textContent = task.Name;

// Info Row 1: Home Town
const infoRow1 = document.createElement("div");
infoRow1.className = "info-row";

const label1 = document.createElement("span");
label1.className = "label";
label1.textContent ="home-town";

const value1 = document.createElement("span");
value1.className = "value";
value1.textContent = task.home;

infoRow1.appendChild(label1);
infoRow1.appendChild(value1);

// Info Row 2: Bookings
const infoRow2 = document.createElement("div");
infoRow2.className = "info-row";

const label2 = document.createElement("span");
label2.className = "label";
label2.textContent = "Bookings";

const value2 = document.createElement("span");
value2.className = "value";
value2.textContent = task.purposer;

infoRow2.appendChild(label2);
infoRow2.appendChild(value2);


// Card Action Buttons
    const cardActions = document.createElement("div");
    cardActions.className = "card-actions";

    const btnCall = document.createElement("button");
    btnCall.className = "btn btn-call";
    btnCall.innerHTML = '<i class="ri-phone-fill"></i> Call';

    const btnMessage = document.createElement("button");
    btnMessage.className = "btn btn-message";
    btnMessage.textContent = "Message";

    cardActions.appendChild(btnCall);
    cardActions.appendChild(btnMessage);

// Assemble Profile Card
profileCard.appendChild(cardHeader);
profileCard.appendChild(userName);
profileCard.appendChild(infoRow1);
profileCard.appendChild(infoRow2);
profileCard.appendChild(cardActions);


cardWrapper.appendChild(profileCard);
});

    updateStack();
}

showCards();


 function updateStack(){
     const cards = stack.querySelectorAll(".profile-card");

     cards.forEach(function(card, index){
         const depth = Math.min(index, 2);
         card.style.zIndex = 3 - depth;
         card.style.transform = `translateY(${depth * 10}px) scale(${1 - depth * 0.02})`;
         card.style.opacity = `${1 - depth * 0.02}`;
     });
    }


upbtn.addEventListener("click",function(){
   const cards = stack.querySelectorAll(".profile-card");
   const lastCard = cards[cards.length - 1];
   if(lastCard){
    stack.insertBefore(lastCard,cards[0]);
   updateStack();
   }
});
downbtn.addEventListener("click",function(){
    const cards = stack.querySelectorAll(".profile-card");
    const firstCard = cards[0];
    if(firstCard){
        stack.appendChild(firstCard);
        updateStack();
    }
});