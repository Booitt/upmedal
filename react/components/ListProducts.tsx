import React from "react"
import styles from "../styles/ListProducts.module.css"
import ProducItem, { Product } from "./ProductItem"

interface Props {
	products: Product[]
}

const ListProducts: React.FC<Props> = ({ products }) => {
	return (
		<div className={styles.container}>
			{products?.map((product) => (
				<ProducItem product={product} key={product.id} />
			))}
		</div>
	)
}

export default ListProducts
