function toggleMobileMenu(){
    document.querySelector("#menu").classList.toggle("active");

    // document.getElementById("mobile").style.backgroundColor='darkblue';
    // document.getElementById("mobile").style.backgroundColor='darkcyan';

}

function validateForm(){
    var x = document.forms['myForm']['name'].value;
    var m = document.forms['myForm']['mail'].value;
    var d = document.forms['myForm']['passw'].value;

    if(x == null || x == ""){
        alert("Name must be filled out");
        return false;
    }
    else if(m == null || m == ""){
        alert("Email must be provided");
        return false;
    }
    else if(d.length < 6 || d == ""){
        alert("Password too short");
        return false;
    }
}



function myFunction() {
    var x = document.getElementById("fnames");
    x.value = x.value.toUpperCase();
  }

function register(){
    document.getElementById("services").style.display="none";
    document.getElementById("hide1").style.display="none";
    document.getElementById("hide2").style.display="none";
    document.getElementById("show1").style.display="block";
    
}

function contacts(){
    document.getElementById("services").style.display="none";
    document.getElementById("show1").style.display="none";
    document.getElementById("hide1").style.display="none";
    document.getElementById("hide3").style.display="none";
    document.getElementById("hide2").style.display="flex";

}

function home(){
    document.getElementById("hide1").style.display="flex";
    document.getElementById("hide3").style.display="flex";
    document.getElementById("hide2").style.display="none";
    document.getElementById("show1").style.display="none";
    document.getElementById("services").style.display="none";

}

function services(){
    document.getElementById("services").style.display="block";
    document.getElementById("hide1").style.display="none";
    document.getElementById("hide3").style.display="none";
    document.getElementById("hide2").style.display="none";
    document.getElementById("show1").style.display="none";

}

