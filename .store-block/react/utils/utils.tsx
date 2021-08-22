export const phoneMask = (prevValue: string, newValue: string) => {
	if (newValue.length < prevValue.length) return newValue
	if (newValue.length > 16) return prevValue
	if (newValue.length < 15) {
		return newValue
			.replace(/\D/g, "")
			.replace(/(\d{2})/, "($1) ")
			.replace(/(\d{4})/, "$1-")
	} else {
		return newValue
			.replace(/\D/g, "")
			.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4")
	}
}

interface AWS_URL {
	id: string
	name: string
	email: string
	phone: string
}
export const getURL = ({ id, name, email, phone }: AWS_URL) =>
	`https://phcby7qqw9.execute-api.us-east-2.amazonaws.com/dev/upmedal-api?id=${id}&name=${name}&email=${email}&phone=${phone}`