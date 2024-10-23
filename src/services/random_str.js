
const salt = (length) => {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	
	return result;
}

export const generateRandomString = (length) => {
	const time = `${Date.now()}`;
	return Buffer.from(`${time.slice(0, time.length / 2)}${salt(length)}${time.slice(time.length / 2)}`).toString('base64').slice(0, length);
}