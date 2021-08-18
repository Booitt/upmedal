import React, { useState } from "react";
import {
	FormControl,
	makeStyles,
	MenuItem,
	Select,
} from "@material-ui/core";

interface SliderProps {}

const useStyles = makeStyles((theme) => ({
	root: {
		color: "white",
		backgroundColor: "#303030"
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		color: "white",
		'select': {
			backgroundColor: "black"
		}
	},
	background: {
		backgroundColor: "black"
	}
}));

const Slider: StorefrontFunctionComponent<SliderProps> = ({}) => {
	const classes = useStyles();
	const [age, setAge] = useState(10);
	const handleChange = (e: any) => {
		setAge(e.target.value);
		console.log(age);
	};
	return (
		<>
			<FormControl variant="filled" className={classes.formControl}>
				<Select
					className={classes.root}
					labelId="demo-simple-select-filled-label"
					id="demo-simple-select-filled"
					value={age}
					onChange={handleChange}
				>
					<MenuItem className={classes.root} value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
		</>
	);
};

// Site editor
Slider.schema = {
	title: "editor.countdown.title",
	description: "editor.countdown.description",
	type: "object",
	properties: {},
};

export default Slider;
