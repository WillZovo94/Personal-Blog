const submitButton = document.getElementById("submit-button");
const goBack = document.getElementById("back-btn");
const userName = document.getElementById('username-input');
const title = document.getElementById('title-input');
const content = document.getElementById('content-input');

if (submitButton) {submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    let blogInput = [
        userName.value,
        title.value,
        content.value.trim()
    ];

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

    localStorage.setItem(`${title.value}`, JSON.stringify(blogInput));

    userName.value = '';
    title.value = '';
    content.value='';

    window.location.href="blog.html"
    
    return;
})
}

if (goBack) {goBack.addEventListener('click', function(event) {
    event.preventDefault();

    window.location.href="index1.html"

    return;
})
}




function renderEverything() {
    // for (let index = 0; index < localStorage.length; index++) {
    //    const allKeys = localStorage.key([index]);
        
    //    const data = JSON.parse(localStorage.getItem(allKeys));


       // if (Array.isArray(data)) {
       //     console.log(data.length)
       // }

       const keys = Object.keys(localStorage);

      keys.forEach(key => {
        const div = document.createElement('div');
        const parentElement = document.getElementById('body');
        document.body.appendChild(div);
        div.classList.add('divClass')
       })
  };

// renderEverything();
