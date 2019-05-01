function openNav() {
  document.getElementById("my-nav").style.width = "350px";
}
function closeNav() {
  document.getElementById("my-nav").style.width = "0";
}

function closeInForm() {
  document.getElementById("reg-form").style.width = "0";
  document.getElementById("login-form").style.width = "0";
}

function openInForm() {
  document.getElementById("login-form").style.width = "300px";
  //hides reg form when login is open
  document.getElementById("reg-form").style.width = "0";
}

function closeRegForm() {
  document.getElementById("reg-form").style.width = "0";
  document.getElementById("login-form").style.width = "0";
}
function openRegForm() {
  document.getElementById("reg-form").style.width = "300px";
  document.getElementById("login-form").style.width = "0";
}
