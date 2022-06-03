const form = document.querySelector(".login-form");

form.addEventListener("submit", submitButtonSubmitHandler);

function submitButtonSubmitHandler(e) {
  e.preventDefault();

  const { email, password } = e.currentTarget.elements;

  if (!email.value.length || !password.value.length) {
    return alert("All fields should be filled!");
  }

  console.log({ email: email.value, password: password.value });

  e.currentTarget.reset();
}
