import React from "react";
import PropTypes from "prop-types";

export function Hijo(props) {
	return (
		<div className="blue">
			Soy el hijo, hijo del padre y mi apellido es{" "}
			{props.apellidoFamiliar}
		</div>
	);
}

Hijo.propTypes = {
	apellidoFamiliar: PropTypes.string
};
