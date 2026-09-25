let users = [
  {
    name: "harsh sharma",
    pic: "https://images.unsplash.com/photo-1773332585788-9104ec6f38ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "silent chaos in a loud world | not for everyone"
  },
  {
    name: "aanya verma",
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=870&auto=format&fit=crop",
    bio: "chasing sunsets & aesthetic code ☕✨"
  },
  {
    name: "rohan mehta",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=870&auto=format&fit=crop",
    bio: "turning coffee into scalable backend logic 🚀"
  },
  {
    name: "priya singh",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=870&auto=format&fit=crop",
    bio: "pixels, design & endless curiosity 🎨"
  },
  {
    name: "kabir mehra",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=870&auto=format&fit=crop",
    bio: "living between 0s and 1s 🎧"
  },
  {
    name: "sneha jaiswal",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=870&auto=format&fit=crop",
    bio: "capturing moments & writing clean code ✨"
  },
  {
    name: "vikram rathore",
    pic: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=870&auto=format&fit=crop",
    bio: "debugging life one line at a time 🛠️"
  },
  {
    name: "diya kapoor",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=870&auto=format&fit=crop",
    bio: "minimalist mind, maximum energy 🌿"
  }
];  

const cardsContainer = document.querySelector(".cards");
function showUsers(arr){
      cardsContainer.innerHTML = "";

    if(arr.length ===0){
        const mess = document.createElement("h1");
        mess.textContent ="No users found";
        mess.classList.add("text-white","text-xl","font-bold");
        cardsContainer.appendChild(mess);
        return;
      }

  arr.forEach(function (user){
    //create outer card div
    const card = document.createElement("div");
    card.classList.add("card");

    //create  image
    const img = document.createElement("img");
    img.src =user.pic;
    img.classList.add("bg-img");

    //create blurred-layer
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = user.pic;
    blurredLayer.classList.add("blurred-layer");

    //create content div
    const content = document.createElement("div");
    content.classList.add("content");

    //create user name
    const head = document.createElement("h3");
    head.textContent=user.name;

    const para = document.createElement("p");
    para.textContent=user.bio;

  
    content.appendChild(head);
    content.appendChild(para);
    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    document.querySelector(".cards").appendChild(card);

    

  });

}

showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function(){
    let newUsers = users.filter((user) => {
          return user.name.startsWith(inp.value);
      
    });
  
    showUsers(newUsers);
});

