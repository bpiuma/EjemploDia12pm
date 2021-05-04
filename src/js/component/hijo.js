import React, { useEffect } from "react";
import PropTypes from "prop-types";

export function Hijo(props) {
	useEffect(() => {
		console.log(
			"Yo me ejecuto cuando me monto en la UI o cuando el componente haga update de props o de state"
		);
	});

	useEffect(() => {
		console.log("Yo solo me ejecuto cuando me monto en la UI");
	}, []);

	useEffect(() => {
		console.log(
			"Yo solo me ejecuto cuando me monto en la UI o cuando el prop apellidoFamiliar cambia"
		);
	}, [props.apellidoFamiliar]);

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
