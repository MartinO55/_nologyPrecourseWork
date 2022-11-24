function contactUsSubmitButton(event){

    //console.log("hello world")//calls correctly from page

    //TODO: function needs to grab form elements by ID, store them as a single object, push them to a named array in session storage
    event.preventDefault();

    const email = document.getElementById("email").value;
    const fullName = document.getElementById("fullName").value;
    const message = document.getElementById("message").value;

    const thisMessage = {email,fullName,message};

    //console.log(thisMessage)

    let currentMessages =[];

    if (window.sessionStorage.getItem("messages")){
        currentMessages = JSON.parse(window.sessionStorage.getItem("messages"));
    }

    currentMessages.push(thisMessage);
    window.sessionStorage.setItem("messages", JSON.stringify(currentMessages));
    showMessages();//this can go here
}


function showMessages(){
    //TODO - render each of the messages from session storage as its own HTML element as part of the DL element on the page - so the DL is there, the dt is email and the dd is the .value
    //I assume we just use a foreach loop
    console.log("showMessagesCalled")

    let currentMessages =[];

    if (window.sessionStorage.getItem("messages")){
        currentMessages = JSON.parse(window.sessionStorage.getItem("messages"));
    }

    let listItems = [];
    for (i = 0; i<currentMessages.length; i++) {
        let listItem = "";
        const currentMessage = currentMessages[i];
        listItem += `<dt>${currentMessage.fullName} - ${currentMessage.email}</dt>`;//these ones need backtics, not quotes
        listItem += `<dd>${currentMessage.message}</dd>`
        listItem += '<br />' //so this one doesnt need the backtics, it can work with quotes

        listItems.push(listItem);

    }

    let descList = document.getElementById('currentMessages');
    descList.innerHTML = listItems.join('');
}

function clearMessages(){
    if (window.sessionStorage.getItem("messages")){
        window.sessionStorage.removeItem("messages");
    }

    showMessages();
}