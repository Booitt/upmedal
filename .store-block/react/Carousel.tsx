import React, { useState, useEffect } from "react"
import { Paper, makeStyles } from "@material-ui/core"
import MuiCarousel from "react-material-ui-carousel"
import styles from "./styles/Carousel.module.css"
import { useCssHandles } from "vtex.css-handles"

import { itemsCarousel as items } from "./utils/constants"

const CSS_HANDLES = ["carousel"] as const

const Carousel: React.FC = () => {
	const handles = useCssHandles(CSS_HANDLES)
	const carouselClasses = carouselStyles()
	const [display, setDisplay] = useState("none")
	useEffect(() => {
		setDisplay("flex")
	}, [])
	return (
		<div
			className={`${handles.carousel} ${styles.container}`}
			style={{ display }}
		>
			<MuiCarousel
				interval={5000}
				timeout={700}
				swipe={true}
				activeIndicatorIconButtonProps={{ style: { color: "#14ff00" } }}
				className={carouselClasses.root}
				// next={() => console.log("next")}
				// prev={() => console.log("prev")}
			>
				{items.map((item, i) => (
					<Item key={i} item={item} />
				))}
			</MuiCarousel>
		</div>
	)
}

interface ItemProps {
	item: { alt: string; img: string }
}

const Item: React.FC<ItemProps> = ({ item }) => {
	return (
		<Paper style={{ borderRadius: "1rem" }}>
			<img className={styles.img} src={item.img} alt={item.alt} />
		</Paper>
	)
}

export default Carousel

const carouselStyles = makeStyles({
	root: {
		borderRadius: "1rem !important",
	},
})
