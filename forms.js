function ValidateForm(){
    var x = document.forms["myForm"]["formfname"].value;

    if (x ==""){
    alert("Name must be filled out!")
    return false;
    }
       
}