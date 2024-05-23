// assinging querySelectors to find locations and storing them in variables
const usernameInput = document.querySelector('#username-input');
const titleInput = document.querySelector('#title-input');
const contentInput = document.querySelector('#content-input')
const submitButton = document.querySelector('#submit-button');

// the variable tempStorageObject will either gather the first line of code, or will create an object with three empty arrays.
let tempStorageObject = JSON.parse(localStorage.getItem('tempStorageObject')) || {
    username: [],
    title: [],
    content: []
};

// adding a click event to the submit button
if (submitButton) {submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    // assigning each input of the form to a variable
    const usernameValue = usernameInput.value;
    const titleValue = titleInput.value;
    const contentValue = contentInput.value;

    // making sure that each input has a value before continuing. 
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
    
    // the variable tempStorageObject is pushing the values to each assigned empty array.
    tempStorageObject.username.push(usernameValue);
    tempStorageObject.title.push(titleValue);
    tempStorageObject.content.push(contentValue);

    // setting the items of that variable into a key named tempStorageObject into the localStorage.
    localStorage.setItem('tempStorageObject', JSON.stringify(tempStorageObject));

    // after all previous code runs, it will load the next page which is the blog.html
    window.location.href="blog.html";
 
    // resets the input values back to empty
    usernameInput.value = '';
    titleInput.value = '';
    contentInput.value = '';


    return;

});
}




// theme switch function
function changeTheme() {
    // targets the root element
    const rootElement = document.documentElement;

    // using a new variable to gather the root element data-theme and creating another variable below.
    let dataTheme = rootElement.getAttribute('data-theme');
    let checkTheme;

    // This checks if dataTheme is set to 'light'. If it is.. then it will go to 'dark', otherwise it will stay 'light'. Esssentially using a ternary operator.
    checkTheme = (dataTheme === 'light') ? 'dark' : 'light';

    // This will set the data-theme to whatever value the checkTheme variable creates.
    rootElement.setAttribute('data-theme', checkTheme);

    return;
};


// when you click the dark or light mode button, then it runs changeTheme function.
document.getElementById('dark-light-mode').addEventListener('click', changeTheme)




