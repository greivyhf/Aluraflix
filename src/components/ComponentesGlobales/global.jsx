

import styled from 'styled-components'

const Fieldset = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  position: relative;
  margin: 20px;
  box-sizing: border-box;
`
const Etiqueta = styled.label`
    position: absolute;
    top: 0.90rem;
    left: 0.25rem;
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
    transition: all 0.3s ease;
`
const Campo = styled.input`
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  width: 100%;
  border-radius: 0.25rem;
  padding: 0.75rem 0.75rem 0.5rem 0.5rem;
  border: none;
  background-color:#0084ae;
  outline: none; /* Para eliminar bordes de un input que muestra el navegador*/
    &:focus + ${Etiqueta}{
        margin-top: -23px;
        font-size: 0.75rem;
        font-weight: 400;
        color: #0084ae;
        background-color:#fff;
        padding: 0.125rem;
        border-radius: 2px;
    }
    &:valid + ${Etiqueta}{
        margin-top: -23px;
        font-size: 0.75rem;
        font-weight: 400;
        color: #0084ae;
        padding: 0.125rem;
        border-radius: 2px;
        background-color:#fff;
        border: none;
    }
`
const Select = styled.select`
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  width: 100%;
  border-radius: 0.25rem;
  padding: 0.75rem 0.75rem 0.5rem 0.5rem;
  border: none;
  background-color:#0084ae;
  box-sizing:content-box;
  outline: none; /* Para eliminar bordes de un input que muestra el navegador*/
    &:focus + ${Etiqueta}{
        margin-top: -23px;
        font-size: 0.75rem;
        font-weight: 400;
        color: #0084ae;
        background-color:#fff;
        padding: 0.125rem;
        border-radius: 2px;
    }
    &:valid + ${Etiqueta}{
        margin-top: -23px;
        font-size: 0.75rem;
        font-weight: 400;
        color: #0084ae;
        padding: 0.125rem;
        border-radius: 2px;
        background-color:#fff;
        border: none;
    }
`
const TextArea =styled.textarea`
    font-size: 1rem;
  font-weight: 400;
  color: #fff;
  width: 100%;
  border-radius: 0.25rem;
  padding: 0.75rem 0.75rem 0.5rem 0.5rem;
  border: none;
  background-color:#0084ae;
  box-sizing:content-box;
  outline: none; /* Para eliminar bordes de un input que muestra el navegador*/
    &:focus + ${Etiqueta}{
        margin-top: -23px;
        font-size: 0.75rem;
        font-weight: 400;
        color: #0084ae;
        background-color:#fff;
        padding: 0.125rem;
        border-radius: 2px;
    }
    &:valid + ${Etiqueta}{
        margin-top: -23px;
        font-size: 0.75rem;
        font-weight: 400;
        color: #0084ae;
        padding: 0.125rem;
        border-radius: 2px;
        background-color:#fff;
        border: none;
    }
`
const Color = styled.input`
    font-size: 0.85rem;
    font-weight: 400;
    color: #fff;
    width: 100%;
    border-radius: 0.25rem;
    padding: 0.36rem 0.7rem 0.36rem 0.5rem;
    border: none;
    background-color:#0084ae;
    box-sizing:content-box;
    outline: none;
    &:focus + ${Etiqueta}{
        margin-top: -23px;
        font-size: 0.75rem;
        font-weight: 400;
        color: #0084ae;
        background-color:#fff;
        padding: 0.125rem;
        border-radius: 2px;
    }
    &:valid + ${Etiqueta}{
        margin-top: -23px;
        font-size: 0.75rem;
        font-weight: 400;
        color: #0084ae;
        padding: 0.125rem;
        border-radius: 2px;
        background-color:#fff;
        border: none;
    }
    
`
////////////////////////////////////////////////////////////////////////////////////
export const CustomInput =({id, tipo, etiqueta, nombre, marcador, required})=>{
    return(
        <Fieldset>
            <Campo
                type={tipo}
                id={id}
                name={nombre}
                placeholder={marcador}
                required={required}
                autoComplete="off"
            />
            <Etiqueta className='etiqueta'htmlFor={nombre}>
                {etiqueta}
            </Etiqueta>
        </Fieldset>
    )
}
////////////////////////////////////////////////////////////////////////////////////

export const CustomButton =({nombreBoton, tipoBoton,claseBoton})=>{
return (
<button
 className={claseBoton}
 type={tipoBoton}
 >{nombreBoton}</button>)}
////////////////////////////////////////////////////////////////////////////////////
export const CustomSelect =({nombre,etiqueta, id})=>{
    return(
        <Fieldset>
          <Select id={id} name={nombre} required>
            <option value="" defaultValue ></option>
            <option key={1} value={""}>Agricultura Sostenible</option>
            <option key={2} value={""}>Energias Renovables</option>
            <option key={3} value={""}>Cambio Climático</option>
        </Select>
        <Etiqueta className='etiqueta'htmlFor={nombre}>
                {etiqueta}
            </Etiqueta>
        </Fieldset>
    )
}
////////////////////////////////////////////////////////////////////////////////////
export const CustomTextArea =({nombreTextArea, etiqueta})=>{
    return(
        <Fieldset>
            <TextArea name={nombreTextArea} rows="10" cols="20" required>
            </TextArea>
            <Etiqueta className='etiqueta'htmlFor={nombreTextArea}>
                {etiqueta}
            </Etiqueta>
        </Fieldset>
    ) 
}
////////////////////////////////////////////////////////////////////////////////////
export const CustomInputColor =({id, nombre,required, etiqueta,valor})=>{
    return(
        <Fieldset>
            <Color
                type="color"
                id={id}
                name={nombre}
                required={required}
                autoComplete="off"
                
            />
            <Etiqueta className='etiqueta'htmlFor={nombre}>
                {etiqueta}
            </Etiqueta>
        </Fieldset>
    )
}