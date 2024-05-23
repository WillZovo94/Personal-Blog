// making variables with selectors.
const goBack = document.querySelector('#back-btn')

// go back button function with click event.
if (goBack) {goBack.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href="index.html"
    return;
})
}

//This function gathers stored data and then outputs new elements with values
function loadFromLocalStorage() {
    // uses a variable to gather the information out of the local storage with 'tempStorageObject' key.
    const storedData = JSON.parse(localStorage.getItem('tempStorageObject'));
    if (storedData) {
        tempStorageObject = storedData;
    }
    
    // iterates through storedData username length to see how many overall blog posts there were.
    for (let i = 0; i < storedData.username.length; ++i) {
        const number = storedData.username[i];
        
        // assigning variables with create elements.
        const div = document.createElement('div');
        const h1El = document.createElement('h1');
        const pEl = document.createElement('p');
        const blogUser = document.createElement('p');
        
        // through each iteration it finds the title, content, and username for each series of input so it would be displayed on the page with textContent.
        h1El.textContent = storedData.title[i];
        pEl.textContent = storedData.content[i];
        blogUser.textContent = `Posted by: ${storedData.username[i]}`;

        // adds class through each new element so it can be stylized.
        div.classList.add('divClass');
        h1El.classList.add('post-header');
        pEl.classList.add('blog-p')
        blogUser.classList.add('blog-user');

        // appendChild each new element to its parent element so it can be showcased on the page.
        document.body.appendChild(div);
        div.appendChild(h1El);
        div.appendChild(pEl);
        div.appendChild(blogUser);
    }

}

loadFromLocalStorage();
