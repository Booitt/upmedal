import React from "react"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import PersonIcon from "@material-ui/icons/Person"
import HomeIcon from "@material-ui/icons/Home"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"

const paperStyles = makeStyles({
	root: {
		backgroundColor: "transparent",
		boxShadow: "none",
		color: "white",
		flexGrow: 1,
		margin: "auto",
		maxWidth: "fit-content",
	},
})

const tabStyles = makeStyles({
	selected: {
		color: "#14ff00",
	},
	indicator: {
		backgroundColor: "transparent",
	},
})

export default function IconLabelTabs() {
	const paperClasses = paperStyles()
	const tabClasses = tabStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue)
		event && "" // Todo: go to route?
	}

	return (
		<Paper square className={paperClasses.root}>
			<Tabs
				value={value}
				onChange={handleChange}
				variant="fullWidth"
				indicatorColor="secondary"
				TabIndicatorProps={{ className: tabClasses.indicator }}
				textColor="inherit"
				aria-label="icon label tabs"
			>
				<Tab
					classes={{ selected: tabClasses.selected }}
					icon={<HomeIcon />}
					label="INÍCIO"
				/>
				<Tab
					classes={{ selected: tabClasses.selected }}
					icon={<PersonIcon />}
					label="ENTRAR"
				/>
				<Tab
					classes={{ selected: tabClasses.selected }}
					icon={<ShoppingCartIcon />}
					label="LOJA"
				/>
				<Tab
					classes={{ selected: tabClasses.selected }}
					icon={<WhatsAppIcon />}
					label="WHATSAPP"
				/>
			</Tabs>
		</Paper>
	)
}
