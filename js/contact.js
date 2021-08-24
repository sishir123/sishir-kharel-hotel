const username = document.getElementById("Name");
const email = document.getElementById("Email");
const form = document.getElementById("form");
const message = document.getElementById("Message");

const user = [username, email, message];

function check() {
	user.forEach((el) => {
		if (el.value === "") {
			formError(el, `${el.id} is required.`);
		} else {
			el.parentElement.className = "from-content success";
			if (el === email) checkEmail();
		}
	});
}

function formError(input, message) {
	const error = input.parentElement;
	error.className = "form-content error";
	error.querySelector("small").innerText = message;
}

checkEmail = () => {
	if (
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
			email.value
		)
	) {
		const success = email.parentElement;
		success.className = "form-content success";
	} else {
		formError(email, "Please enter a valid email.");
	}
};
checkSuccess = () => {
	const errorContainer = document.querySelectorAll(".error");
	if (errorContainer.length === 0) {
		user.forEach((el) => (el.value = ""));
	}
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	check();
	checkSuccess();
});
