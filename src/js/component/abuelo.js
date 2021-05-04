import React from "react";
import { Padre } from "./padre.js";

export function Abuelo() {
	let apellido = "Perez";

	return (
		<div className="red">
			Soy el abuelo y me apellido es {apellido}
			<Padre apellidoFamiliar={apellido} />
		</div>
	);
}
