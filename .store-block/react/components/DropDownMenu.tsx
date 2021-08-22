import React from "react"
import { FormControl, makeStyles, MenuItem, Select } from "@material-ui/core"
import styles from "../styles/Dropdown.module.css"

interface DropDownMenuItem {
	id: string
	label: string
	value: string | number
	action: () => void
}

interface DropDrownMenuProps {
	items: DropDownMenuItem[]
	className?: string
	style?: { [key: string]: string }
}

const DropDrownMenu: React.FC<DropDrownMenuProps> = ({
	items,
	className,
	style,
}) => {
	const formClasses = formStyles()
	const inputClasses = inputStyles()
	const menuListClasses = menuListStyles()
	const menuItemClasses = menuItemStyles()

	const [age, setAge] = React.useState(
		(items[0]?.value as string | number) || "initial"
	)
	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		const { value } = event.target
		setAge(("" + event.target.value) as string)
		items.find((item) => item.value === value)?.action()
	}

	return (
		<div className={`${className} ${styles.container}`} style={{ display: "flex", ...style }}>
			<FormControl
				variant="filled"
				className={formClasses.formControl}
				// style={{ width }}
			>
				<Select
					MenuProps={{ classes: menuListClasses }}
					value={age}
					onChange={handleChange}
					disableUnderline={true}
					variant="standard"
					classes={inputClasses}
				>
					{!items.length && (
						<MenuItem value="initial" classes={menuItemClasses}>
							Categoria
						</MenuItem>
					)}
					{items?.map(({ id, label, value }) => (
						<MenuItem classes={menuItemClasses} value={value} key={id}>
							{label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	)
}

const formStyles = makeStyles({
	formControl: {
		margin: ".5rem auto",
		minWidth: 120,
	},
})

const inputStyles = makeStyles({
	root: {
		borderRadius: "5px",
		padding: ".5rem",
		backgroundColor: "#505050",
		"&:focus": {
			backgroundColor: "#505050",
			borderRadius: "5px",
		},
	},
	select: {
		color: "white",
	},
	icon: {
		color: "white",
	},
})

const menuListStyles = makeStyles({
	paper: {
		backgroundColor: "#202020",
	},
})

const menuItemStyles = makeStyles({
	root: {
		color: "white",
		backgroundColor: "#202020",
		"&:focus": {
			backgroundColor: "#404040",
			"&:hover": {
				backgroundColor: "#404040",
			},
		},
		"&:hover": {
			backgroundColor: "#404040",
		},
	},
})

export default DropDrownMenu
