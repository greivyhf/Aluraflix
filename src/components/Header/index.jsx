import "./menu.css"
import logo from "./../../assets/imagen/logo.png"
import { CustomButton } from "./../ComponentesGlobales/global"
import { Link, useResolvedPath } from "react-router-dom"

const BloqueHeader =()=>{
 
  const url = useResolvedPath('').pathname
  let val = true;
  let ruta ='/NewVideo';
  if(url===ruta){
    val = false
    if(ruta==='/NewCat'){
      ruta='../'+ ruta
    }
  }
  return (
    <header className="contenedor-Header">
      <Link to='/'>
        <img className="logo" src={logo} alt="Logo"/>
      </Link> 
      {val&&<Link to={ruta}>
        <CustomButton
          claseBoton="boton-A" 
          tipoBoton="submit"
          nombreBoton="Nuevo Video"
          mostrar="true"
        />
      </Link>}
    </header>
  )
}
export default BloqueHeader
