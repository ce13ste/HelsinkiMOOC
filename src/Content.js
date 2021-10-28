import React from "react";

const Content = (props) => {
    console.log(props)
	return (
		<main>
			<p>Part name={props.parts[0].name} exercises={props.parts[0].exercises}</p>
			<p>Part name={props.parts[1].name} exercises={props.parts[1].exercises}</p>
            <p>Part name={props.parts[2].name} exercises={props.parts[2].exercises}</p>
		</main>
	);
};

export default Content;