function validar()

var formato_email = /()/%$;

var swErrores=false;

console.log(userNameinput.value + "*"+passwordinput.value);

if (userNameinput.value.length == 0 || userNameinput.value.length < 7){
    document.getElement8yid("errorusername").innerHTML="el nombre debe tener minimo 7 caracteres"
    userNameinput.focus();
    swErrores=true
}

if(userNameinput.value.length == 0 || userNameinput.value.length < 7){
    document.getElement8yid("erroruserMail").innerHTML="por favor escriva un correo valido"
    correoinput.focus();
    swErrores=true


}

if (swErrores==true) {

    return false;

}

else {
    return true
}