
import React from 'react'
import styled from 'styled-components'
import { CustomInput, CustomButton, CustomInputColor } from '../../ComponentesGlobales/global'


const Div = styled.div`
    background-color:#83ae00;
    padding: 50px 10%;
    text-align:center;
    height:55vh;
 
`
const ContButtons =styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap: wrap;
    width:100%;
    padding: 0 10px;
    box-sizing:border-box;
`
const AlignButtons = styled.div`
    display:flex;
    justify-content:left;
    flex-wrap: wrap;
    gap:20px;
    width:40%;
`
const Titulo =styled.h1`
    font-family:'Raleway', sans-serif;
    font-size: 2rem;
    font-weight:500;
    text-align:center;
    color: #0084ae;
    background-color: #fff;
    padding: 10px;
    width: 350px;
    margin: 20px 10px;
    border-radius:10px 0 10px 0;
    box-sizing:border-box;
`
const FormNewCat =()=>{
     return(
        <Div>
             <Titulo>Nueva Categoria</Titulo>  
                <form >
                    <CustomInput
                        tipo="text"
                        etiqueta="Nombre"
                        id="nombre"
                        nombre="nombre"
                        required="required"
                        marcador=""
                        value=""
                    />
                    <CustomInput
                        tipo="text"
                        etiqueta="Descripcion de la categoria"
                        id="descripcion"
                        nombre="descripcion"
                        marcador=""
                        required="required"
                        value=""
                    />
                    <CustomInputColor
                        id="color"
                        nombre="color"
                        etiqueta="Color de la categoria"
                        required="required"
                        valor=""
                    />
                    <CustomInput
                        tipo="text"
                        etiqueta="Codigo de seguridad"
                        id="codigo"
                        nombre="codigo"
                        marcador=""
                        required="required"
                        value=''
                    />
                    <ContButtons>
                        <AlignButtons>
                            <CustomButton
                                claseBoton="boton-A"
                                tipoBoton="submit"
                                nombreBoton="Guardar"
                            />
                            <CustomButton
                                claseBoton="boton-B"
                                tipoBoton="reset"
                                nombreBoton="Limpiar"
                            />
                        </AlignButtons>
                    </ContButtons>
                </form>
        </Div>
    )
}
export default FormNewCat
