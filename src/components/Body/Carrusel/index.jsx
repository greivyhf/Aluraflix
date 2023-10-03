import { EffectCoverflow,Navigation, Pagination, Scrollbar, A11y,Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {a1,b1,c1,d1,e1,f1,g1,h1,a2,b2,c2,d2,e2,f2,g2,h2,a3,b3,c3,d3,e3,f3,g3,h3} from '../../../assets/carrusel'

const ContenedorA =styled.div`
    padding: 50px 0;
    border: 1px solid #464646;
    background-color:#00000060;
`
const ContenedorB=styled.div`
    display: flex;
    align-items:center;
    flex-wrap: wrap;
`
const Texto = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 0.85rem;
    font-weight: 300;
    color: #f4cece;
    padding: 20px 10px;
`
const ColorUno = styled.span`
    background-color: #ffb700;
    font-family: 'Raleway', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    padding: 10px 30px;
    margin: 10px;
    display: inline-block;
    border-radius:10px 0 10px 0;
`
const ColorDos = styled.h2`
    background-color: #00ffb7;
    font-family: 'Raleway', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    padding: 10px 30px;
    margin: 10px;
    display: inline-block;
    border-radius:10px 0 10px 0;
`
const ColorTres = styled.h2`
    background-color: #b700ff;
    font-family: 'Raleway', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    padding: 10px 30px;
    margin: 10px;
    display: inline-block;
    border-radius:10px 0 10px 0;
`
/////////////////////////////////////////////////////////////////
const Carrusel =({titulo, descripcion, colorFondoBoton})=>{
    const resoluciones =[
        {cant:1, res:260},
        {cant:2, res:510},
        {cant:3, res:760},
        {cant:4, res:1010},
        {cant:5, res:1260},
        {cant:6, res:1560},
        {cant:7, res:7680},
    ]
 
    const [anchoPantalla, setAnchoPantalla] =  useState(window.innerWidth)

	useEffect(() => {
        const manejarResolucion = () => {
            setAnchoPantalla(window.innerWidth);
        };
        window.addEventListener('resize', manejarResolucion);
        return () => {
          window.removeEventListener('resize', manejarResolucion);
        };
     },[]);

     const resolucion = resoluciones.filter(datos => datos.res > anchoPantalla)
     const cantidad =resolucion[0].cant -1

    return(
        <ContenedorA>
            <ContenedorB>
                <ColorUno>Agricultura Sostenible</ColorUno>
                <Texto>Debe cubrir las necesidades alimentarias y textiles de las presentes y futuras generaciones sin poner en peligro la salud del medio ambiente</Texto>
            </ContenedorB>
            <Swiper
                // install Swiper modules
                    modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y,Zoom]}
                    spaceBetween={10}
                    slidesPerView={cantidad}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={() => ''}
                    onSlideChange={() => ''}
                    onClick={(e)=>console.log(e)}
                >
                <SwiperSlide><img src={a1}/></SwiperSlide>
                <SwiperSlide><img src={b1}/></SwiperSlide>
                <SwiperSlide><img src={c1}/></SwiperSlide>
                <SwiperSlide><img src={d1}/></SwiperSlide>
                <SwiperSlide><img src={e1}/></SwiperSlide>
                <SwiperSlide><img src={f1}/></SwiperSlide>
                <SwiperSlide><img src={g1}/></SwiperSlide>
                <SwiperSlide><img src={h1}/></SwiperSlide>
            </Swiper>
            <ContenedorB>
                <ColorDos>Energias Renovables</ColorDos>
                <Texto>Debe cubrir las necesidades alimentarias y textiles de las presentes y futuras generaciones sin poner en peligro la salud del medio ambiente</Texto>
            </ContenedorB>
            <Swiper
                // install Swiper modules
                    modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y,Zoom]}
                    spaceBetween={10}
                    slidesPerView={cantidad}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={() => ''}
                    onSlideChange={() => ''}
                    onClick={(e)=>console.log(e)}
                >
                <SwiperSlide><img src={a2}/></SwiperSlide>
                <SwiperSlide><img src={b2}/></SwiperSlide>
                <SwiperSlide><img src={c2}/></SwiperSlide>
                <SwiperSlide><img src={d2}/></SwiperSlide>
                <SwiperSlide><img src={e2}/></SwiperSlide>
                <SwiperSlide><img src={f2}/></SwiperSlide>
                <SwiperSlide><img src={g2}/></SwiperSlide>
                <SwiperSlide><img src={h2}/></SwiperSlide>
            </Swiper>
            <ContenedorB>
                <ColorTres>Cambio Climatico</ColorTres>
                <Texto>Debe cubrir las necesidades alimentarias y textiles de las presentes y futuras generaciones sin poner en peligro la salud del medio ambiente</Texto>
            </ContenedorB>
            <Swiper
                // install Swiper modules
                    modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y,Zoom]}
                    spaceBetween={10}
                    slidesPerView={cantidad}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={() => ''}
                    onSlideChange={() => ''}
                    onClick={(e)=>console.log(e)}
                >
                <SwiperSlide><img src={a3}/></SwiperSlide>
                <SwiperSlide><img src={b3}/></SwiperSlide>
                <SwiperSlide><img src={c3}/></SwiperSlide>
                <SwiperSlide><img src={d3}/></SwiperSlide>
                <SwiperSlide><img src={e3}/></SwiperSlide>
                <SwiperSlide><img src={f3}/></SwiperSlide>
                <SwiperSlide><img src={g3}/></SwiperSlide>
                <SwiperSlide><img src={h3}/></SwiperSlide>
            </Swiper>
        </ContenedorA>
        
    )
}
export default Carrusel