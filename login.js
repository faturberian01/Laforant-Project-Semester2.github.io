let validate = () => {

  let Email = document.getElementById('Email')
  let Username = document.getElementById('Username')
  let Password = document.getElementById('Password')
  let agree = document.getElementById('agree')
  let errorMsg = []
  
  validateEmail(Email,errorMsg)
  validateUsername(Username, errorMsg)
  validatePassword(Password,errorMsg)
  validateagree(agree, errorMsg)

      if(errorMsg.length === 0){
          alert('Registration Success!')
      }else{
          alert(errorMsg.join('\n'))
      }
}

let validateUsername = (Username, errorMsg) =>{

  if(Username.value === ""){
      errorMsg.push('Username required')
  }else if (Username.value.length < 5){
      errorMsg.push('Username length must more than equal to 5')
  }
}

let validatePassword = (Password, errorMsg) => {
  if(Password.value === ""){
      errorMsg.push('Password required')
  }else if(Password.value.length < 8){
      errorMsg.push('passowrd length must more than equal to 8')
  }
}

let validateEmail = (Email, errorMsg) => {
  if(Email.value === ""){
      errorMsg.push('Email required')
  }else if(Email.value.startsWith('@') ||
          Email.value.startsWith('.')){
              errorMsg.push('Email cannot starts with . after @')
  }else if(Email.value.indexOf('.') === (Email.value.indexOf('@')+  1)){
      errorMsg.push('Email cannot contain . after @')
  }else if(!Email.value.endsWith('@gmail.com')){
      errorMsg.push('Email must ends with @gmail.com')
  }
}

let validateagree = (agree, errorMsg) => {
  if(!agree.checked){
      errorMsg.push('you must agree to the policy to continue')
  }
}