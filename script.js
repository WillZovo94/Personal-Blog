const submitButton = document.getElementById("submit-button");
const userName = document.getElementById('username-input');
const title = document.getElementById('title-input');
const content = document.getElementById('content-input');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const blogInput = {
        Username: userName.value,
        title: title.value,
        content: content.value.trim()
    };

    if(userName.value === '') {
        alert("Please enter username");
        return;
    } else if (title.value === '') {
        alert("Please enter the title");
        return;
    } else if (content.value === '') {
        alert("Please enter some content");
        return;
    };

    localStorage.setItem('blogInput', JSON.stringify(blogInput));

    userName.value = '';
    title.value = '';
    content.value='';

    window.location.href="index2.html"
    
    return;
})