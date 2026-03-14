
document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('contactForm');
	const messageField = document.getElementById('message');

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		// Use built-in validation first
		if (!form.checkValidity()) {
			form.reportValidity();
			return;
		}

		const name = form.name.value.trim();
		const email = form.email.value.trim();
		const age = form.age.value.trim();
		const gender = form.gender.value;
		const userMessage = messageField.value.trim();

		const summary = `Full name: ${name}\nEmail: ${email}\nAge: ${age}\nGender: ${gender}\n\nMessage:\n${userMessage}`;

		// Put the compiled details into the message textarea
		messageField.value = summary;
	});
});

