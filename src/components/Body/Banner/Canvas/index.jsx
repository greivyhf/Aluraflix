
import {useRef,useState, useEffect} from "react";
import '../../Banner/banner.css'

function CanvaSuperior() {
  const [ancho, setAncho] = useState(window.innerWidth)
	const canvasRef = useRef(null);
  const alto = ancho * 0.12

	useEffect(() => {
    const manejarRedimension = () => {
      setAncho(window.innerWidth);
    };
    window.addEventListener('resize', manejarRedimension);
    return () => {
      window.removeEventListener('resize', manejarRedimension);
    };
 },[]);
  useEffect(()=>{

    const inicioLineaX = 0;
    const inicioLineaY = ancho *0.12;
    
    const inicioAnguloX = ancho *0.02;
    const inicioAnguloY = -(ancho *0.13);
    const finalAnguloX = ancho * 0.50;
    const finalAnguloY = ancho * 0.12;
    const finalLineaX = ancho;
    const finalLineaY = 0;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.fillStyle = "#0084ae";
    context.moveTo(inicioLineaX, inicioLineaY);
    context.bezierCurveTo(inicioAnguloX, inicioAnguloY, finalAnguloX, finalAnguloY, finalLineaX, finalLineaY);
    context.lineTo(0,0);
    context.bezierCurveTo(0, inicioAnguloY, 0, 0, 0, -inicioAnguloY);
    context.fill();
    context.closePath();
    context.lineWidth = 1;
    context.strokeStyle="#0084ae";
  })
	return (
		<div className='fondo'>
      <canvas className='canva' ref={canvasRef} width={ancho} height={alto}></canvas>
		</div>
	);
}
export default CanvaSuperior