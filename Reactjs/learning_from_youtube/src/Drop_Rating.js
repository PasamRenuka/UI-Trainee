import React from "react";

const Dropdown_Rating = () => {
	const options = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'];
	const onOptionChangeHandler = (event) => {
		console.log("User Selected Value - ", event.target.value)
	}
	return (
		<>
			<center>
				
            <label>Rating:</label>
				<select onChange={onOptionChangeHandler}>

					<option>Please give rating</option>
					{options.map((option, index) => {
						return <option key={index} >
							{option}
						</option>
					})}
				</select>
			</center>
		</>
	);
};

export default Dropdown_Rating;
