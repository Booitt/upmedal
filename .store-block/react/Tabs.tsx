import React, { useState, useEffect } from "react"
import { useCssHandles } from "vtex.css-handles"

import { Paper, Tabs as MuiTabs, Tab } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import HomeIcon from "@material-ui/icons/Home"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"

const CSS_HANDLES = ['tabs'] as const

const Tabs: React.FC = () => {
	const handles = useCssHandles(CSS_HANDLES)
	const paperClasses = paperStyles()
	const tabClasses = tabStyles()

	const [display, setDisplay] = useState('none')

	useEffect(() => {
		setDisplay('initial')
	}, [])
	// const [value, setValue] = React.useState(0)

	// const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
	// 	setValue(newValue)
	// 	event && ""
	// }

	return (
		<div className={handles.tabs} style={{display}}>
			<Paper square className={paperClasses.root}>
				<MuiTabs
					value={0}
					// onChange={handleChange}
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
						href="/"
					/>
					<Tab
						disableTouchRipple={true}
						classes={{ selected: tabClasses.selected, root: tabClasses.root }}
						icon={<WhatsAppIcon />}
						label="SUPORTE"
						href="https://api.whatsapp.com/send?phone=5555999262435&text=Ol%C3%A1!"
						target="__blank"
					/>
				</MuiTabs>
			</Paper>
		</div>
	)
}

export default Tabs

const paperStyles = makeStyles({
	root: {
		fontSize: "",
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