import React from "react";

const Dropdown_location = () => {
	const options = ['Chennai', 'Hyderabad', 'Bengaluru', 'Vijayawada', 'Kerala'];
	const onOptionChangeHandler = (event) => {
		console.log("User Selected Value - ", event.target.value)
        const loc_value=event.target.value;
	}
	return (
		<>
			<center>
            <label>Location:</label>

				<select onChange={onOptionChangeHandler}>

					<option>Please choose Location</option>
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

export default Dropdown_location;
