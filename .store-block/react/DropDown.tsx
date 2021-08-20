import React from "react"
import DropDrownMenu from "./components/DropDownMenu"
import { itemsSelection as items } from "./utils/constants"
import { useCssHandles } from "vtex.css-handles"

const CSS_HANDLES = ["dropdown"]

const DropDown = () => {
	const handles = useCssHandles(CSS_HANDLES)
	return (
		<DropDrownMenu
			items={items}
			style={{ margin: "auto" }}
			className={handles.dropdown}
		/>
	)
}
export default DropDown
