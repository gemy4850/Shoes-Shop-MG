let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let searchicon = document.querySelector('.search');
let searchForm = document.querySelector('.search-form');
let searchLapel = document.querySelector('.search-form label a');
let searchinput = document.getElementById('searchinput');
let likedMenu = document.getElementById('likedMenu');
let likedList = document.getElementById('likedList');
let products = document.querySelectorAll('.products .box-container .box .img');
let likedproduct = document.querySelectorAll('.products .box-container .box .icons .liked');
let userLogin = document.getElementById('user-login');
let formcontainer = document.querySelector(".form-container")
let home = document.getElementById("home")
let closeLogin = document.getElementById("close-login")
let iconEmail = document.getElementById("icon-email")
let inputEmail = document.getElementById("input-email")
let iconPassword = document.getElementById("icon-password")
let inputPassword = document.getElementById("input-password")
let eyeShowhide = document.getElementById("eye")
let signup = document.getElementById("signup")
let formLogin = document.getElementById("form-login")
let formSignup = document.querySelector(".form-signup")
let login = document.getElementById("login")
let closeLoginSignup = document.getElementById("close-login-signup")

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

searchicon.onclick = ()=>{
    searchForm.classList.toggle("active")
    likedList.classList.remove("active")
}
likedMenu.onclick = ()=>{
    likedList.classList.toggle("active")
    searchForm.classList.remove("active")
}
searchinput.onkeyup = ()=>{
    searchLapel.style.color = "#ff9f1a"
    if(searchinput.value === ""){
        searchLapel.style.color = "black"
    }
}
userLogin.addEventListener("click",()=>{
  formcontainer.classList.add("active")
  home.classList.add("hide")
})
closeLogin.addEventListener("click",()=>{
  formcontainer.classList.remove("active")
  home.classList.remove("hide")
})
inputEmail.addEventListener("keyup",()=>{
  iconEmail.style.color = "#732ae8e6"
  inputEmail.style.borderBottomColor = "#732ae8e6"
  if(inputEmail.value === ""){
    iconEmail.style.color = "#999"
  inputEmail.style.borderBottomColor = "#aaaaaa"
  }
})
inputPassword.addEventListener("keyup",()=>{
  iconPassword.style.color = "#732ae8e6"
  inputPassword.style.borderBottomColor = "#732ae8e6"
  if(inputPassword.value === ""){
    iconPassword.style.color = "#999"
  inputPassword.style.borderBottomColor = "#aaaaaa"
  }
})
eyeShowhide.addEventListener("click",() =>{
    if(inputPassword.type === "password"){
      inputPassword.type = "text";
      eye.classList.replace("fa-eye","fa-eye-slash")
    }else{
      inputPassword.type = "password";
      eye.classList.replace("fa-eye-slash","fa-eye")
    }
  })
  signup.addEventListener("click",()=>{
    formLogin.classList.add("hide")
    formSignup.classList.add("active")
  })
  login.addEventListener("click",()=>{
    formLogin.classList.remove("hide")
    formSignup.classList.remove("active")
  })
  closeLoginSignup.addEventListener("click",()=>{
    formcontainer.classList.remove("active")
  home.classList.remove("hide")
  })
window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}
let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
    var src = image_1.getAttribute('src');
    document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
  image_2.addEventListener('click', () =>{
    var src = image_2.getAttribute('src');
    document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
  image_3.addEventListener('click', () =>{
    var src = image_3.getAttribute('src');
    document.querySelector('.big-image-3').src = src;
  });
});