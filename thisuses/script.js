let form = document.querySelector("form");
let userName = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let img = document.querySelector("#image");
const userManager = {
  users:[],

  init: function(){
      
     form.addEventListener("submit",this.submitForm.bind(this)); 
  },

  submitForm:function(e){
    e.preventDefault();
    this.addUser();

  },
  addUser: function(){
       this.users.push({
        userName : userName.value,
        role : role.value,
        bio : bio.value,
        img : img.value
     });
    form.reset();
    this.renderUi();
    //this.removeUser();
  },
renderUi: function () {
  const container = document.querySelector("#usersContainer");
  container.innerHTML = "";

  this.users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.className = "user-card";

    const userImage = document.createElement("img");
    userImage.src = user.img;
    userImage.alt = "User";
    userImage.className = "user-image";

    const userInfo = document.createElement("div");
    userInfo.className = "user-info";

    const name = document.createElement("h2");
    name.textContent = user.userName;

    const role = document.createElement("h3");
    role.textContent = user.role;

    const description = document.createElement("p");
    description.textContent = user.bio;

    userInfo.append(name, role, description);
    userCard.append(userImage, userInfo);

    // 👇 This specific card
    userCard.addEventListener("click", function () {
      userCard.remove();
    });

    container.appendChild(userCard);
  });
}
,
//   removeUser: function (){
//        document.querySelector("#usersContainer").addEventListener("click",function(){
//                document.querySelector(".user-card").style.display = "none";
//        });

//   }
}
userManager.init();
