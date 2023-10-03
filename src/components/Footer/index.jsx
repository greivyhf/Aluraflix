import logo from "../../assets/imagen/logo.png"
import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height:300px;
    background-color: #342f2f;
    flex-wrap: wrap;
`
const Legend = styled.h3`
    font-family:'Roboto', sans-serif;
    font-size:1.125rem;
    font-weight: 300;
    padding:20px;
    color: #ffe7e7;
`
const Imagen = styled.img`
    height:150px;
    
`
const Span =styled.span`
    font-family:'Fuggles',serif;
    font-size: 2.5rem;
`
const BloqueFooter =()=>{
    return(
        <Footer>
        <Imagen src={logo} alt="Logo Nature" />
        <Legend>
            Developed by:  <Span>Greivy Hernández Franco</Span>
        </Legend>
    </Footer>
    )

}
export default BloqueFooter