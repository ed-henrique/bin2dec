const binary = 100101010010;

const binToDec = (binary) => {
	let tmp = binary;
	let i;
	let result = 0;

	for (i = 0; tmp / 10 >= 1; i++) {
		if (tmp % 10 === 1) {
			result += Math.pow((tmp % 10) * 2, i);
		}

		tmp = Math.floor(tmp / 10);
	}

	if (tmp % 10 === 1) {
		result += Math.pow((tmp % 10) * 2, i);
	}

	return result;
};
