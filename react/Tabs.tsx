import React from "react"
import { Paper, Tabs as MuiTabs, Tab } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
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
	root: {
        transition: "background-color .3s linear",
		"&:hover": {
			backgroundColor: "#4b4b4ba2",
		},
	},
	selected: {
		color: "#14ff00",
	},
	indicator: {
		backgroundColor: "transparent",
	},
})

const Tabs: React.FC = () => {
	const paperClasses = paperStyles()
	const tabClasses = tabStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
		setValue(newValue)
		event && "" // Todo: go to route?
	}

	return (
		<div>
			<Paper square className={paperClasses.root}>
				<MuiTabs
					value={value}
					onChange={handleChange}
					variant="fullWidth"
					indicatorColor="secondary"
					TabIndicatorProps={{ className: tabClasses.indicator }}
					textColor="inherit"
					aria-label="icon label tabs"
				>
					<Tab
						disableTouchRipple={true}
						classes={{ selected: tabClasses.selected, root: tabClasses.root }}
						icon={<HomeIcon />}
						label="INÍCIO"
					/>
					<Tab
						disableTouchRipple={true}
						classes={{ selected: tabClasses.selected, root: tabClasses.root }}
						icon={<PersonIcon />}
						label="ENTRAR"
					/>
					<Tab
						disableTouchRipple={true}
						classes={{ selected: tabClasses.selected, root: tabClasses.root }}
						icon={<ShoppingCartIcon />}
						label="LOJA"
					/>
					<Tab
						disableTouchRipple={true}
						classes={{ selected: tabClasses.selected, root: tabClasses.root }}
						icon={<WhatsAppIcon />}
						label="WHATSAPP"
					/>
				</MuiTabs>
			</Paper>
		</div>
	)
}

export default Tabs
