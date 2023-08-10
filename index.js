const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const alertError = document.querySelector("#alert-error")

const object = {
    name: "",
    email: "",
    message: "",
}
document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener("submit", checkForm);
    nameInput.addEventListener("input", fillObject);
    emailInput.addEventListener("input", fillObject);
    messageInput.addEventListener("input", fillObject);
});

function checkForm(e) {
    e.preventDefault();

    if (Object.values(object).some(input => input === "")) {
        setAlert("All fields are required", true);
        return;
    }
    const { name } = object
    setAlert(`Hello ${name}, We will contact you soon!`, false);

    form.reset();
    object.name = "";
    object.email = "";
    object.message = "";
}

function fillObject(e) {
    object[e.target.id] = e.target.value;
}

function setAlert(msg, error) {
    cleanHTML(alertError);
    const p = document.createElement("p")
    p.textContent = msg;

    if (error) {
        p.classList.add("error");
    } else {
        p.classList.add("error", "green");
    }

    alertError.appendChild(p);

    setTimeout(() => {
        p.remove();
    }, 3000);
}

function cleanHTML (fatherElement) {
    while(fatherElement.firstChild){
        fatherElement.firstChild.remove(fatherElement.firstChild);
    }
}