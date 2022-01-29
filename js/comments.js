function getValue(id) {
    return document.getElementById(id).value.trim();
}
function showError(key, value) {
    if (value!="none")
        document.getElementById(key+"error").innerHTML="* "+value;
    else document.getElementById(key+"error").innerHTML='';
}
function validate() {

    var flag=true;
    var name = getValue("name");
    if (name == '') 
        showError("name", "Please fill out your name.");
    else if (name.length>100)
        showError("name", "Your name should not exceed 100 characters.");
    else showError("name", "none");

    var message = getValue("message");
    if (message == '') 
        showError("message", "Please fill out the message.");
    else if (message.length>500)
        showError("message", "Your message should not exceed 500 characters.");
    else showError("message", "none");

    if (name == '' || name.length>100 || message == '' || message.length>500) flag=false;
    return flag;
}