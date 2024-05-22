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

    if (usernameValue === '') {
        alert("Please enter username");
        return;
    } else if (titleValue === '') {
        alert("Please enter a title")
        return;
    } else if (contentValue === '') {
        alert("Please enter some content");
        return;
    }

    tempStorageObject.username.push(usernameValue);
    tempStorageObject.title.push(titleValue);
    tempStorageObject.content.push(contentValue);

    localStorage.setItem('tempStorageObject', JSON.stringify(tempStorageObject));

    window.location.href="blog.html";
 
    usernameInput.value = '';
    titleInput.value = '';
    contentInput.value = '';


    return;

});
}




//switch function
function changeTheme() {
    const rootElement = document.documentElement;
    let dataTheme = rootElement.getAttribute('data-theme');
    let checkTheme;

    checkTheme = (dataTheme === 'light') ? 'dark' : 'light';

    rootElement.setAttribute('data-theme', checkTheme);

    return;
};


// Add event listener
document.getElementById('dark-light-mode').addEventListener('click', changeTheme)




