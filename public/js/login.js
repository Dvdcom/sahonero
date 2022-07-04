const use = document.querySelector('#usuario');
const pass = document.querySelector('#password');
let msg1
let msg2

if(typeof errors != 'undefined'){
  //prevenir la recarga de pagina
  errors.forEach( error => {
    if(error.param == 'usuario'){
      msg1 = error.msg;
      console.log(msg1)
    }else if(error.param == 'password'){
      msg2 = error.msg;
      console.log(msg2)
    }
  })
}
if( msg1 != ''){
  use.classList.remove('d-none')
}
if( msg2 != ''){
  pass.classList.remove('d-none')
}