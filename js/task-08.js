const formEl = document.querySelector('.login-form');
//console.log(formEl);
const allInputs = document.querySelectorAll('input');
//console.log(allInputs);

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
 console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};



/*//const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { login, password }
  } = event.currentTarget;

  if (login.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
});*/

/*formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('submitted');
});

let formData = {
    email: '',
    password: '',
}

allInputs.forEach(input => {
    input.addEventListener('input', event => {
        //console.log(event.target.name);
        formData = { ...formData, [event.target.name]: event.target.value };
        console.log(formData);
        
        if (event.target.value === '') {
            alert(`All fields must be filled in!`);
        }
       event.currentTarget.reset();
    });
   
});*/