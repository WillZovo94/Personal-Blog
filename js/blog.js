const goBack = document.querySelector('#back-btn')


if (goBack) {goBack.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href="index1.html"
    return;
})
}

function loadFromLocalStorage() {
    const storedData = JSON.parse(localStorage.getItem('tempStorageObject'));
    if (storedData) {
        tempStorageObject = storedData;
    }

    for (let i = 0; i < storedData.username.length; ++i) {
        const number = storedData.username[i];
        
        const div = document.createElement('div');
        const h1El = document.createElement('h1');
        const pEl = document.createElement('p');
        const blogUser = document.createElement('p');
        
        h1El.textContent = storedData.title[i];
        pEl.textContent = storedData.content[i];
        blogUser.textContent = `Posted by: ${storedData.username[i]}`;

        
        div.classList.add('divClass');
        h1El.classList.add('post-header');
        pEl.classList.add('blog-p')
        blogUser.classList.add('blog-user');

        
        document.body.appendChild(div);
        div.appendChild(h1El);
        div.appendChild(pEl);
        div.appendChild(blogUser);
    }


    /*
    storedData.username.forEach((username) => {
        console.log(storedData);
        
        /*console.log(storedData);
        const div = document.createElement('div');
        const pEl = document.createElement('p');
        pEl.textContent = storedData.username;
        div.classList.add('pEl');
        div.classList.add('divClass');
        document.body.appendChild(div);
        div.appendChild(pEl);
        
    })*/

}

loadFromLocalStorage();
