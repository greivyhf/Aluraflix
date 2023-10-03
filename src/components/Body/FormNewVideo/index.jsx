
import React from 'react'
import styled from 'styled-components'
import { CustomInput, CustomButton, CustomSelect, CustomTextArea } from '../../ComponentesGlobales/global'
import { Link } from 'react-router-dom'


const Div = styled.div`
    background-color:#83ae00;
    padding: 50px 10%;
    text-align:center;
 
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
    width: 250px;
    margin: 20px 10px;
    border-radius:10px 0 10px 0;
    box-sizing:border-box;
`
const FormNewVideo =()=>{

     return(
        <Div>
             <Titulo>Nuevo Video</Titulo>  
                <form >
                    <CustomInput
                        tipo="text"
                        etiqueta="Titulo"
                        id="titulo"
                        nombre="titulo"
                        required="required"
                        marcador=""
                        value=""
                    />
                    <CustomInput
                        tipo="url"
                        etiqueta="Link del video"
                        id="video"
                        nombre="video"
                        marcador=""
                        required="required"
                        value=""
                    />
                    <CustomInput
                        tipo="url"
                        etiqueta="Link de la imagen del video"
                        id="imagen"
                        nombre="imagen"
                        marcador=""
                        required="required"
                        value=""
                    />
                        <CustomSelect
                        id="categoria"
                        etiqueta="Seleccione la categoría"
                        nombre="categoria"
                        />
                        <CustomTextArea
                        nombreTextArea="descripcion"
                        etiqueta="Descripción"
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
                                nombreBoton="Registrar Video"
                            />
                            <CustomButton
                            claseBoton="boton-B"
                                tipoBoton="reset"
                                nombreBoton="Limpiar"
                            />
                        </AlignButtons>
                            <Link to='../NewCat'>
                                <CustomButton
                                    claseBoton="boton-A"
                                    tipoBoton="button"
                                    nombreBoton="Nueva categoria"
                                />
                            </Link>

                    </ContButtons>
                </form>
        </Div>
    )
}
export default FormNewVideo
