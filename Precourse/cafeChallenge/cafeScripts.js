function contactUsSubmitButton(event){

    //console.log("hello world")//calls correctly from page

    //TODO: function needs to grab form elements by ID, store them as a single object, push them to a named array in session storage
    event.preventDefault();

    const email = document.getElementById("email").value;
    const fullName = document.getElementById("fullName").value;
    const message = document.getElementById("message").value;

    const thisMessage = {email,fullName,message};

    console.log(thisMessage)

}