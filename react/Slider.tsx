import React from "react"
import Carousel from "@brainhubeu/react-carousel"
import "./styles.css"
import img from "../assets/camiseta_gremio.jpg"
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['slider'] as const

interface SliderProps {}

const Slider: StorefrontFunctionComponent<SliderProps> = ({}) => {
  const handles = useCssHandles(CSS_HANDLES)
	return (
			<Carousel className={handles.slider} plugins={["arrows"]}>
				<img src={img} />
				<img src={img} />
				<img src={img} />
			</Carousel>
	)
}

// Site editor
Slider.schema = {
	title: "editor.countdown.title",
	description: "editor.countdown.description",
	type: "object",
	properties: {},
}

export default Slider
