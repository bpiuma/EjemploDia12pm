import React, { useState } from "react";
import { Padre } from "./padre.js";

export function Abuelo() {
	const [apellido, setApellido] = useState("Perez");
	const [edad, setEdad] = useState(80);

	const decirHola = () => {
		console.log("Hola buenos días");
	};

	const saludar = frase => {
		console.log(frase);
	};

	const cambiarApellido = () => {
		setApellido("Sepulveda");
		console.log(apellido);
	};

	const envejecer = () => {
		setEdad(prevState => {
			return prevState + 1;
		});
		console.log(edad);
	};

	return (
		<div className="red">
			Soy el abuelo y me apellido es {apellido} y mi edad es {edad}
			<button onClick={decirHola}>Saludar1</button>
			<button
				onClick={() => {
					saludar("Buenas noches");
				}}>
				Saludar2
			</button>
			<button onClick={cambiarApellido}>Cambiar Apellido</button>
			<button onClick={envejecer}>Envejecer</button>
			<Padre apellidoFamiliar={apellido} />
		</div>
	);
}
