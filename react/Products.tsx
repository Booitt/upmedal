import React from "react"
import DropDrownMenu from "./components/DropDownMenu"
import { itemsSelection as items, products } from "./utils/constants"
import ListProducts from "./components/ListProducts"
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['products'] as const

const Products: StorefrontFunctionComponent = ({}) => {
	const handles = useCssHandles(CSS_HANDLES)
	handles && ""
	return (
		<div style={{margin: `1rem auto 6rem auto`}}>
			<DropDrownMenu items={items} style={{margin: "auto"}}/>
			<ListProducts products={products} />
		</div>
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
