import React from "react";
import PropTypes from "prop-types";
import { Hijo } from "./hijo.js";

export function Padre(props) {
	return (
		<div className="green">
			Soy el padre, hijo del abuelo y mi apellido es{" "}
			{props.apellidoFamiliar}
			<Hijo {...props} />
		</div>
	);
}

Padre.propTypes = {
	apellidoFamiliar: PropTypes.string
};

//Mediante {...props} se efectúa la propagación de los props
