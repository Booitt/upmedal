import { Paper, makeStyles } from "@material-ui/core"
import React from "react"
import MuiCarousel from "react-material-ui-carousel"
import styles from "./styles/Carousel.module.css"

import { itemsCarousel as items } from "./utils/constants"

const carouselStyles = makeStyles({
	root: {
		borderRadius: "1rem !important",
	},
})

const Carousel: React.FC = () => {
	const carouselClasses = carouselStyles()
	return (
		<div className={styles.container}>
			<MuiCarousel
				interval={5000}
				timeout={700}
				swipe={true}
				activeIndicatorIconButtonProps={{ style: { color: "#14ff00" } }}
				className={carouselClasses.root}
				next={() => console.log("next")}
				prev={() => console.log("prev")}
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
