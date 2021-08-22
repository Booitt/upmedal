import React, { useState } from "react"
import axios from "axios"
import { v4 as uuid } from "uuid"
import { CircularProgress } from "@material-ui/core"
import styles from "./styles/Leads.module.css"
// import { AWS_API } from "./utils/constants"
import { phoneMask } from "./utils/utils"
import { useCssHandles } from "vtex.css-handles"

interface AWS_URL {
	id: string
	name: string
	email: string
	phone: string
}
const getURL = ({ id, name, email, phone }: AWS_URL) =>
	`https://phcby7qqw9.execute-api.us-east-2.amazonaws.com/dev/upmedal-api?id=${id}&name=${name}&email=${email}&phone=${phone}`

const CSS_HANDLES = ["leads"] as const

const Leads: StorefrontFunctionComponent = () => {
	const handles = useCssHandles(CSS_HANDLES)
	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		phone: "",
	})
	const [errorMsg, setErrorMsg] = useState("")
	const [status, setStatus] = useState("")

	const handleInput = (e: React.ChangeEvent<any>) => {
		// <HTMLInputElement> not accepted
		if (errorMsg) setErrorMsg("")
		const { id, value } = e.target
		setInputs((prevState) => {
			if (id === "phone") {
				const phoneValue = phoneMask(prevState.phone, value)
				return { ...prevState, phone: phoneValue }
			}
			return { ...prevState, [id]: value }
		})
	}

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const error = hasError(inputs)
		if (error) return setErrorMsg(error)

		setStatus("enviando")
		axios
			.get(getURL({ ...inputs, id: uuid() }))
			.then(() => {
				setStatus("enviado")
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div
			style={{ display: "flex", justifyContent: "center" }}
			className={handles.leads}
		>
			<form onSubmit={onSubmit} className={styles.container}>
				{!status ? (
					<>
						<h3 className={styles.title}>
							Cadastre-se para receber ofertas deste produto
						</h3>
						<div className={styles.inputContainer}>
							<label htmlFor="name">Nome*</label>
							<input
								id="name"
								value={inputs.name}
								onChange={handleInput}
								className={errorMsg && !inputs.name ? styles.inputError : ""}
							/>
						</div>
						<div className={styles.inputContainer}>
							<label htmlFor="email">E-mail*</label>
							<input
								type="email"
								id="email"
								value={inputs.email}
								onChange={handleInput}
								className={errorMsg && !inputs.email ? styles.inputError : ""}
							/>
						</div>
						<div className={styles.inputContainer}>
							<label htmlFor="phone">Telefone*</label>
							<input
								type="tel"
								id="phone"
								value={inputs.phone}
								onChange={handleInput}
								className={errorMsg && !inputs.phone ? styles.inputError : ""}
							/>
						</div>
						<div className={styles.errorMsg}>{errorMsg}</div>
						<small className={styles.disclaimer}>
							Não cadastre informações pessoais, pois a API expoe os dados.
						</small>
						<button>Cadastrar</button>
					</>
				) : (
					<div className={styles.status}>
						{status === "enviando" ? (
							<CircularProgress color="inherit" />
						) : (
							<>
								<h3>
									Obrigado! Assim que houver uma oferta para este produto,
									avisaremos você. =)
								</h3>
								<p>
									<a
										href="https://phcby7qqw9.execute-api.us-east-2.amazonaws.com/dev/upmedal-api"
										target="__blank"
									>
										Você pode ver a lista de cadastros aqui
									</a>
								</p>
							</>
						)}
					</div>
				)}
			</form>
		</div>
	)
}

export default Leads

const hasError = (inputs: { name: string; email: string; phone: string }) => {
	if (Object.values(inputs).some((value) => !value.trim()))
		return "Todos os campos devem ser preenchidos!"
	return false
}
