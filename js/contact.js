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

    var email = getValue("email");
    if (email == '') 
        showError("email", "Please fill out your email.");
    else if (email.length>100)
        showError("email", "Your email should not exceed 100 characters.");
    else showError("email", "none");

    var subject = getValue("subject");
    if (subject == '') 
        showError("subject", "Please fill out the subject.");
    else if (subject.length<50)
        showError("subject", "Subject should not shorter than 50 characters.");
    else if (subject.length>250)
        showError("subject", "Subject should not exceed 250 characters.");
    else showError("subject", "none");

    var message = getValue("message");
    if (message == '') 
        showError("message", "Please fill out the message.");
    else if (message.length>500)
        showError("message", "Your message should not exceed 500 characters.");
    else showError("message", "none");

    if (name == '' || name.length>100 || email == '' || email.length>100 || subject == '' || subject.length<50 || subject.length>250 || message == '' || message.length>500) flag=false;
    return flag;
}