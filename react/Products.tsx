import React from "react"
import DropDrownMenu from "./components/DropDownMenu"
import { items, products } from "./utils/constants"
import ListProducts from "./components/ListProducts"

const Products: StorefrontFunctionComponent = ({}) => {
	return (
		<>
			<DropDrownMenu items={items} style={{margin: "auto"}}/>
			<ListProducts products={products} />
		</>
	)
}

// Site editor
Products.schema = {
	// TODO: ajustar messages
	title: "editor.countdown.title",
	description: "editor.countdown.description",
	type: "object",
	properties: {},
}

export default Products
