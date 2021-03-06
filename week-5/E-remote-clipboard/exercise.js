/*
Task 1
=======
Use fetch to create a new clipboard.

HTTP Verb: POST
API: https://codeyourfuture.herokuapp.com/api/clipboard
Request Body: { "title": "myClipboardId", "text": "some text to put in the clipboard"}

Task 2
======
Use fetch to load the text of an existing clipboard and display it in the browser console.

HTTP Verb: GET
API: https://codeyourfuture.herokuapp.com/api/clipboard?title=myClipboardId
Also, for GET request, you can use the url directly in your browser address bar
*/


// Task 1: create a new clipboard
// Complete the code below

var clipboardTitle = "Miles";
var clipboardText = "Hopefully this works";
var requestBody = { title: clipboardTitle, text: clipboardText };

var postRequestParameters = {
    method: 'post',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(requestBody)
};

fetch('https://codeyourfuture.herokuapp.com/api/clipboard', postRequestParameters);


// Task 2: Load an existing clipboard
// Add your code below

fetch('https://codeyourfuture.herokuapp.com/api/clipboard?title=myClipboardId').then(function(response) {
    return response.text();
}).then(res => console.log(res));
