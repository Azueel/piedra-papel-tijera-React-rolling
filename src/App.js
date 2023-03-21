import { useState } from 'react';
import './App.css';

function App() {
	const [seleccionJugador, setSeleccionJugador] = useState('');
	const [seleccionComputadora, setSeleccionComputadora] = useState('');
	const [resultado, setResultado] = useState('');

	const seleccionArma = (arma) => {
		const eleccionComputadora = Math.floor(Math.random() * 3);
		let computadoraResultado = '';

		switch (eleccionComputadora) {
			case 0:
				computadoraResultado = 'piedra';
				break;

			case 1:
				computadoraResultado = 'papel';
				break;

			case 2:
				computadoraResultado = 'tijera';
				break;
		}

		setSeleccionComputadora(computadoraResultado);
		setSeleccionJugador(arma);

		calcularResultado(arma, computadoraResultado);
	};

	const calcularResultado = (opcionJugador, opcionMaquina) => {
		if (opcionJugador === opcionMaquina) {
			return setResultado('empate');
		} else if (opcionJugador === 'piedra') {
			if (opcionMaquina === 'papel') {
				return setResultado('perdiste');
			} else {
				return setResultado('ganaste');
			}
		} else if (opcionJugador === 'papel') {
			if (opcionMaquina === 'piedra') {
				return setResultado('ganaste');
			} else {
				return setResultado('perdiste');
			}
		} else if (opcionJugador === 'tijera') {
			if (opcionMaquina === 'papel') {
				return setResultado('ganaste');
			} else {
				return setResultado('perdiste');
			}
		}
	};

	return (
		<div className="container">
			<h1 className="title">Piedra Papel o Tijera</h1>
			<p className="instruction">Seleccione su Arma: </p>
			<div className="choices">
				<button className="choice" onClick={() => seleccionArma('piedra')}>
					Piedra
				</button>
				<button className="choice" onClick={() => seleccionArma('papel')}>
					Papel
				</button>
				<button className="choice" onClick={() => seleccionArma('tijera')}>
					Tijera
				</button>
			</div>

			{/* Aca mostrar el resultado */}

			{seleccionJugador && (
				<div className="result">
					<p>
						Tu seleccion fue:{' '}
						<span className="seleccion-text">{seleccionJugador}</span>
					</p>

					<p>
						La Computadora Selecciono:{' '}
						<span className="seleccion-text">{seleccionComputadora}</span>
					</p>

					<p className="result-text">{resultado}</p>
				</div>
			)}
		</div>
	);
}

export default App;
