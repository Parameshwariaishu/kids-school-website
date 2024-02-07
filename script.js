var fname = document.getElementById('nameone');
var email = document.getElementById('emailone');
var phone = document.getElementById('phoneone');
var msg = document.getElementById('msgone');

var nameE = document.getElementById('errorone');
var emailE = document.getElementById('erroremail');
var phoneE = document.getElementById('errorphone');
var msgE = document.getElementById('errormsg');


// var success=document.getElementById('success')
var form = document.getElementById('form');

form.addEventListener('submit', (e) => {

    var isValid = true;
    nameE.style.display = "none";
    emailE.style.display = "none";
    phoneE.style.display = "none";
    msgE.style.display = "none";
   

    if (fname.value == '') {
        nameE.style.display = "block";
        isValid = false;
    }
    if (email.value == '') {
        emailE.style.display = "block";
        isValid = false;
    }
    if (phone.value == '') {
        phoneE.style.display = "block";
        isValid = false;
    }
    if (msg.value == '') {
        msgE.style.display = "block";
        isValid = false;
    }
 
    if (!isValid) {
        // success.innerHTML=("success");
        e.preventDefault();
        
    }
    
}

)