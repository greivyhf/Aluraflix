import CanvaSuperior from './Canvas';
import './banner.css'
import AudioVisual from '../../../assets/imagen/audiovisual.png'

const Banner=()=> {

	

	return (
		<div className='fondo'>
		<CanvaSuperior/>
		<div className='fondo-div'>	
			<div className='contenedor'>	
				<img className='audiovisual' src={AudioVisual} alt='Fondo de banner'></img>
				<h1 className='titulo-banner'>Educacion Ambiental</h1>	
			</div>
			<p className='texto-banner'>Nuestro planeta azul, ese lugar que nos abriga día con día, nos alimenta y nos permite vivir en él, necesita de nuestra ayuda. Es fundamental  enseñarles a los niños la importancia de  amarlo y respetarlo, que aprendan que la salud de nuestro mundo depende hoy de nosotros. El Ser Humano es responsable de la preservación del único hogar que tenemos: la Tierra.</p>
			<p className='texto-banner'>Somos, en realidad, la especie clave en este momento, así que tenemos que alinear nuestras estrategias con los poderes sanadores de la Madre Tierra, ya no podemos permitirnos el lujo de saltarnos las normas de esta "casa". "Esto lo cambia todo" (2014), <span className='firma'>Naomi Klein</span></p>
		</div>
		
		</div>
	);
}
export default Banner