function samePassword(){
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  if(password == confirmPassword){
    document.getElementById('password').setAttribute('class', 'greenborder');
    document.getElementById('confirmPassword').setAttribute('class', 'greenborder');
  }else{
    document.getElementById('password').setAttribute('class', 'redborder');
    document.getElementById('confirmPassword').setAttribute('class', 'redborder');
  }
}
