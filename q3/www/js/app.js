
function validateEmail() {
  var email = document.getElementById("email").value;

  var re = /(?=^.{1,150}$)^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})){0,128}$/;
  //already checks for empty space
  var testemail = re.test(String(email).toLowerCase()); //testing the variable re in the line above

  if (!testemail) {
    alert('Please enter a valid e-mail address.')

    return false;
  }

  return true;
}
/*
function validateEmailNoRegex() {
  var email = document.getElementById("email").value;

  if (email == '') {
    alert("Empty email.");
    document.getElementById("email").focus();

    return false;
  }

  return true;
}
*/


function validateCountry() {
  var country = document.getElementById("country").value;

  if (country == '') {
    alert("Please choose a country");

    document.getElementById("country").focus();

    return false;
  }

  return true;
  }



function validateDescription(){
  var description = document.getElementById("description").value;

  if (description==''){
    alert("Please enter a description.");
     document.getElementById("description").focus();
    return false;
  }

  return true;
}

function validateImage() {
  var avatarImage = document.getElementById("avatarImage").value;

  if (avatarImage == '') {
    alert("Please select a file.");

    document.getElementById("avatarImage").focus();

    return false;
  }
  return true;
}
/*
var file_selected = false;

function validateFile() {
    if(!file_selected) {
      alert('No file selected!');
      return false;
    } // or anything else
    return true;
}
*/
/*
function validateUsername() {
  var username = document.getElementById("username").value;
  //in class
  var re = /^[a-zA-Z].{8,24}$/;
  var testusername = re.test(username);
  ///////
  if (!testusername || username == ''){
    alert("Please enter a valid username")
    return false;
  }
  return true;
}


function validatePassword() {
  var password = document.getElementById("password").value;

  var re = /^[a-zA-Z].{8,24}$/;
  var testpw=re.test(password)
  if (!testpw || password == '') {
    alert("Please enter a valid password");

    return false;
  }

  return true;
}

function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
*/

function validateForm() {

  if (!validateEmail()) {
    return false;
  }

  if(!validateCountry()){
    return false;
  }


  if (!validateDescription()) {
    return false;
  }
  if (!validateImage()){
    return false;
  }
/*
  if (!validateUsername()) {
    return false;
  }

  if (!validatePassword()) {
    return false;
  }
*/
  return true;
}
