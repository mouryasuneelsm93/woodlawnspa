
$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 50) {
      $(".nav-on-scroll").addClass("compressed");
      $("#logo").addClass("compressed");
    } else {
      $(".nav-on-scroll").removeClass("compressed");
      $("#logo").removeClass("compressed");
    }
  });
});
console.log("hello");

function home() {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'index.html', true);
  xhr.onprogress = function () {
    console.log("on progress");
  }
  xhr.onreadystatechange = function () {
    console.log('ready state is', xhr.readyState);
  }
  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById('data').innerHTML = this.responseText;
      console.log("successful");
    }
    else {
      console.error("file not found");
    }
  }
  xhr.send();
}


function about() {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'about.html', true);
  xhr.onprogress = function () {
    console.log("on progress");
  }
  xhr.onreadystatechange = function() {
    console.log('ready state is', xhr.readyState);
  }
  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById('data').innerHTML = this.responseText;
      console.log("successful");
    }
    else {
      console.error("file not found");
    }
  }
  xhr.send();
}

function services() {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'services.html', true);
  xhr.onprogress = function () {
    console.log("on progress");
  }
  xhr.onreadystatechange = function () {
    console.log('ready state is', xhr.readyState);
  }
  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById('data').innerHTML = this.responseText;
      console.log(this.responseText);
    }
    else {
      console.error("file not found");
    }
  }
  xhr.send();
}

function pricing() {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'pricing.html', true);
  xhr.onprogress = function () {
    console.log("on progress");
  }
  xhr.onreadystatechange = function () {
    console.log('ready state is', xhr.readyState);
  }
  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById('data').innerHTML = this.responseText;
      console.log("successful");
     
    }
    else {
      console.error("file not found");
    }
  }
  xhr.send();
}
function blog() {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'blog.html', true);
  xhr.onprogress = function () {
    console.log("on progress");
  }
  xhr.onreadystatechange = function () {
    console.log('ready state is', xhr.readyState);
  }
  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById('data').innerHTML = this.responseText;
      console.log("successful");
    }
    else {
      console.error("file not found");
    }
  }
  xhr.send();
}

function contact() {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'contact.html', true);
  xhr.onprogress = function () {
    console.log("on progress");
  }
  xhr.onreadystatechange = function () {
    console.log('ready state is', xhr.readyState);
  }
  xhr.onload = function () {
    if (this.status === 200) {
      
      document.getElementById('data').innerHTML = this.responseText;
      console.log(this.responseText);
    }
    else {
      console.error("file not found");
    }
  }
  xhr.send();
}