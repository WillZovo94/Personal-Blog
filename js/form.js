const usernameInput = document.querySelector('#username-input');
const titleInput = document.querySelector('#title-input');
const contentInput = document.querySelector('#content-input')
const submitButton = document.querySelector('#submit-button');

let tempStorageObject = JSON.parse(localStorage.getItem('tempStorageObject')) || {
    username: [],
    title: [],
    content: []
};


if (submitButton) {submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const usernameValue = usernameInput.value;
    const titleValue = titleInput.value;
    const contentValue = contentInput.value;

    tempStorageObject.username.push(usernameValue);
    tempStorageObject.title.push(titleValue);
    tempStorageObject.content.push(contentValue);

    localStorage.setItem('tempStorageObject', JSON.stringify(tempStorageObject));

    window.location.href="blog.html"
 
    usernameInput.value = '';
    titleInput.value = '';
    contentInput.value = '';


    return;

});
}


