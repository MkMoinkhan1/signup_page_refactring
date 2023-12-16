let valid = true;
let userName = document.getElementById("username");
let userError = document.getElementById("name-small");
let emailError = document.getElementById("email-small");
let userEmail = document.getElementById("email");
let userPhone = document.getElementById("phone");
let phoneError = document.getElementById("phone-small");
let userPassword = document.getElementById("password");
let passwordError = document.getElementById("password-small");
let userConfirmPassword = document.getElementById("confirm-password");
let confirmPasswordError = document.getElementById("confirm-password-small");
let userDob = document.getElementById("dob");
let dobError = document.getElementById("dob-small");
let userCheckMale = document.getElementById("check-male");
let userCheckFemale = document.getElementById("check-female");
let checkError = document.getElementById("check-small");
let userAddress = document.getElementById("address");
let addressError = document.getElementById("address-small");

var data = {
  name: {value: "", errMsg: ""},
  Email: "",
  Phone: "",
  Address: "",
  DOB: "",
  Password: "",
  ConfirmPassword: "",
};
// null
// ""
// undefined
let name = validateName
function formSubmit() {
  // let validateUserName() 
  // && !validateEmail() && !validateEmail() && !validateCheck() && !validateDateOfBirth() && !validatePassword() && !validateConfirmPassword()){
  //   return false
  // }else{
  //   return true
  // }
  // if (!userName.value) {
  //   userName.style.border = "1px solid red";
  //   userError.innerText = "please enter name";
  //   valid = false; 
  // }
  // if (userEmail.value === "") {
  //   userEmail.style.border = "1px solid red";
  //   emailError.innerText = "please enter email";
  //   valid = false;
  // } 
  // if (userPhone.value === "") {
  //   userPhone.style.border = "1px solid red";
  //   phoneError.innerText = "please enter phone number";
  //   valid = false;
  // }
  // if (userPassword.value === "") {
  //   userPassword.style.border = "1px solid red";
  //   passwordError.innerText = "please enter password";
  //   valid = false;
  // }
  // if (userConfirmPassword.value === "") {
  //   userConfirmPassword.style.border = "1px solid red";
  //   confirmPasswordError.innerText = "please enter confirm password";
  //   valid = false;
  // }
  // if (userDob.value === "") {
  //   userDob.style.border = "1px solid red";
  //   dobError.innerText = "please enter date-of-birth";
  //   valid = false;
  // }
  // if (!userCheckMale.checked && !userCheckFemale.checked) {
  //   checkError.innerText = "please select gender";
  //   valid = false;
  // }
  // if (userAddress.value === "") {
  //   userAddress.style.border = "1px solid red";
  //   addressError.innerText = "please enter valid Address";
  //   valid = false;
  // }
  // return valid;
}

console.log(data);
localStorage.setItem("data", JSON.stringify(data));

//  -----------UserName---------------

function validateUserName() {
  let userName = document.getElementById("username");
  let userError = document.getElementById("name-small");
  let validateName = /^(?!\s+$)[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
  let valid = true;
  if (userName.value === "") {
    userName.style.border = "1px solid red";
    userError.innerText = "please enter name";
    valid = false;
  } else {
    if (userName.value.trim().length < 5 || userName.value.trim().length > 20) {
      userError.innerText =
        "At least 5 characters are required and max 20 characters are allowed";
      userName.style.border = "1px solid red";
      valid = false;
    } else if (!validateName.test(userName.value)) {
      userError.innerText = "Only one space allowed between two letters";
      userName.style.border = "1px solid red";
      valid = false;
    } else {
      userError.innerText = "";
      userName.style.border = "2px solid green";
      valid = true;
      data.name = userName.value;
    }
  }
  return valid;
}
//  -----------Email---------------

function validateEmail() {
  if (userEmail.value === "") {
    userEmail.style.border = "1px solid red";
    emailError.innerText = "please enter email";
    valid = false;
  } else {
    let validateEmail = /^[a-zA-Z0-9.+_-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,15}$/;
    if (!validateEmail.test(userEmail.value)) {
      userEmail.style.border = "1px solid red";
      emailError.innerText = "please enter valid email Ex -: moin123@gmail.com";
      valid = false;
    } else {
      emailError.innerText = "";
      userEmail.style.border = "2px solid green";
      data.Email = userEmail.value;
      valid = true;
    }
  }
  return valid;
}
//  -----------Phone---------------

function validatePhone() {
  if (userPhone.value === "") {
    userPhone.style.border = "1px solid red";
    phoneError.innerText = "please enter phone number";
    valid = false;
  } else {
    let validateNumber = /^[6-9]\d{9}$/;
    if (!validateNumber.test(userPhone.value)) {
      phoneError.innerText = "please enter a valid phone number";
      userPhone.style.border = "1px solid red";
      valid = false;
    }else if(checkNumber(userPhone.value).length>0){
      phoneError.innerText = "Invalid Number";
      userPhone.style.border = "1px solid red";
      valid = false;
    } else {
      phoneError.innerText = "";
      userPhone.style.border = "2px solid green";
      data.Phone = userPhone.value;
      valid = true;
    }
  }
  // console.log(checkNumber(userPhone.value)===false);
  return valid;
}
//  -----------Address---------------

function validateAddress() {
  if (userAddress.value === "") {
    userAddress.style.border = "1px solid red";
    addressError.innerText = "please enter valid Address";
    valid = false;
  } else {
    let validationAddress = userAddress.value.length;
    if (validationAddress < 10 || validateAddress > 100) {
      addressError.innerText = "address must be between 10 and 100 characters";
      userAddress.style.border = "1px solid red";
      valid = false;
    } else {
      addressError.innerText = "";
      userAddress.style.border = "2px solid green";
      data.Address = userAddress.value;
      valid = true;
    }
  }
  return valid;
}
//  -----------Password---------------

function validatePassword() {
  if (userPassword.value === "") {
    userPassword.style.border = "1px solid red";
    passwordError.innerText = "please enter password";
    valid = false;
  } else {
    const validatePasswordDigit = /\d/;
    const validatePasswordSpecial = /[!@#$%^&*]/;
    const validatePasswordSmall = /[a-z]/;
    const validatePasswordCap = /[A-Z]/;
    if (userPassword.value.length < 8 || userPassword.value.length > 20) {
      userPassword.style.border = "1px solid red";
      passwordError.innerText = "Password must be between 8 and 20 characters";
      valid = false;
    } else if (!validatePasswordDigit.test(userPassword.value)) {
      userPassword.style.border = "1px solid red";
      passwordError.innerText = "At least one digit is required";
      valid = false;
    } else if (!validatePasswordSpecial.test(userPassword.value)) {
      userPassword.style.border = "1px solid red";
      passwordError.innerText = "At least one Special Character is required";
      valid = false;
    } else if (!validatePasswordSmall.test(userPassword.value)) {
      userPassword.style.border = "1px solid red";
      passwordError.innerText = "At least one small letter is required";
      valid = false;
    } else if (!validatePasswordCap.test(userPassword.value)) {
      userPassword.style.border = "1px solid red";
      passwordError.innerText = "At least one capital letter is required";
      valid = false;
    } else {
      passwordError.innerText = "";
      userPassword.style.border = "2px solid green";
      data.Password = userPassword.value;
      valid = true;
    }
  }
  validateConfirmPassword()
  return valid;
}
//  -----------confirm password---------------


function validateConfirmPassword() {
  if (userConfirmPassword.value === "") {
    userConfirmPassword.style.border = "1px solid red";
    confirmPasswordError.innerText = "please enter confirm password";
    valid = false;
  } else {
    if (userPassword.value !== userConfirmPassword.value) {
      userConfirmPassword.style.border = "1px solid red";
      confirmPasswordError.innerText =
        "Password and Confirm Password are not same";
      valid = false;
    } else {
      confirmPasswordError.innerText = "";
      userConfirmPassword.style.border = "2px solid green";
      data.ConfirmPassword = userConfirmPassword.value;
      valid = true;validateConfirmPassword
    }
  }
}
//  -----------Date of Birth---------------

function validateDateOfBirth() {
  let currentDate = new Date();
  let userSelectDate = new Date(userDob.value);
  let valid = true;

  if (userSelectDate.getFullYear() <= 1930) {
    dobError.innerText = "Invalid Date";
    userDob.style.border = "1px solid red";
    valid = false;
  }
   else if (currentDate <= userSelectDate) {
    dobError.innerText = "Please enter a valid date of birth";
    userDob.style.border = "1px solid red";
    valid = false;
  } 
   else if (currentDate.getFullYear() === userSelectDate.getFullYear()) {
    dobError.innerText = "Please enter a valid date of birth";
    userDob.style.border = "1px solid red";
    valid = false;
  } 
  else {
    dobError.innerText = "";  
    userDob.style.border = "2px solid green";
    data.DOB = userDob.value;
  }
  return valid;
}
//  -----------validation Radio button ---------------

function validateCheck() {
  if (userCheckMale.checked && userCheckFemale.checked) {
    checkError.innerText = "please select gender";
    valid = false;
  } else {
    checkError.innerText = "";
    valid = true;
  }
  return valid;
}
//  -----------validation check phone number---------------

// let num = 8999999999;
function checkNumber(num) {
  let str = String(num);
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  let val = Object.values(obj);
  let checkValidation = val.filter(val=>val>6)
  return checkValidation
}
// console.log(checkNumber(num));
