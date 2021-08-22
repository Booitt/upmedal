import React, {useState, useEffect} from "react"
import DropDrownMenu from "./components/DropDownMenu"
import { itemsSelection as items } from "./utils/constants"
import { useCssHandles } from "vtex.css-handles"

const CSS_HANDLES = ["dropdown"]

const DropDown = () => {
	const handles = useCssHandles(CSS_HANDLES)
	const [display, setDisplay] = useState('none')
	useEffect(() => {
		setDisplay("flex")
	}, [])
	return (
		<DropDrownMenu
			items={items}
			style={{ margin: "auto", display }}
			className={handles.dropdown}
		/>
	)
}
export default DropDown
