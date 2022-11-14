document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("form");

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		document.querySelector("span").innerHTML = binToDec(
			new FormData(form).get("bin"),
		);
	});
});

const isBin = (str) => {
	let isBinary = false;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === "0" || str[i] === "1") {
			isBinary = true;
		} else {
			isBinary = false;
		}
	}

	return isBinary;
};

const binToDec = (binary) => {
	if (isBin(binary)) {
		return BigInt(`0b${binary}`);
	} else {
		return "Please insert a binary number";
	}
};
