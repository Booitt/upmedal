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