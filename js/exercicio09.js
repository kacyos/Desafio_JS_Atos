const login = document.querySelector("#login");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#password-confirm");
const button = document.querySelector("#button");
const inputs = document.querySelectorAll("input");
const divMessageError = document.querySelector("#message-error");

const errors = {
  "login-error": {
    type: "login-error",
    error: false,
    message: "Login deve deve ser preenchido.",
  },
  "password-error": {
    type: "password-error",
    error: false,
    message: "Senha deve conter de 6 a 10 caracters.",
  },
  "confirm-password-error": {
    type: "confirm-password-error",
    error: false,
    message: "Senha e confirmação de senha não são iguais.",
  },
};

function createElement(tag, id, text) {
  const element = document.createElement(tag);
  id ? (element.id = id) : null;
  text ? (element.textContent = text) : null;
  return element;
}

function removeElementById(id) {
  const element = document.querySelector(`#${id}`);
  element ? element.remove() : null;
}

function validateLogin() {
  if (login.value.length <= 0) {
    const element = createElement(
      "p",
      "login-error",
      "Login deve deve ser preenchido."
    );

    return element;
  } else {
    removeElementById("login-error");
  }
}

function validatePassword() {
  if (password?.value.length < 6 || password?.value.length > 10) {
    const element = createElement(
      "p",
      "password-error",
      "Senha deve conter de 6 a 10 caracters."
    );
    return element;
  } else {
    removeElementById("password-error");
  }
}

function validateConfirmPassword() {
  if (confirmPassword?.value !== password?.value) {
    const element = createElement(
      "p",
      "confirm-password-error",
      "Senha e confirmação de senha não são iguais."
    );
    return element;
  } else {
    removeElementById("confirm-password-error");
  }
}

function validate() {
  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      const elementsError = [];

      elementsError.push(validateLogin());
      elementsError.push(validatePassword());
      elementsError.push(validateConfirmPassword());

      elementsError.forEach((element) => {
        elementExists = !!divMessageError.querySelector(`#${element?.id}`);

        if (element && !elementExists) {
          element.style.textAlign = "center";
          divMessageError.appendChild(element);
        }
      });

      console.log(divMessageError.childElementCount);
      divMessageError.childElementCount == 0
        ? (button.disabled = false)
        : (button.disabled = true);
    });
  });
}

validate();
