import { useState,useEffect } from "react";
import Carousel from "../components/Carousel";
import axios from "axios";
import apiUrl from '../apiUrl.js'
import { useSelector,useDispatch } from "react-redux";
import city_actions from '../store/actions/cities'
const { read_carousel } = city_actions

export default function Home() {

  const [show,setShow] = useState(true)
  const nombre1 = "My";
  const nombre2 = "Tinerary";
  //const store = useSelector(store=>store)
  //console.log(store);
  //const city_reducer = useSelector(store=>store.cities)
  //console.log(city_reducer);
  const carousel = useSelector(store=>store.cities.carousel)
  const dispatch = useDispatch()
  useEffect(
    ()=>{
      if (carousel.length===0) {
        dispatch(read_carousel())
      }
    },        //callback que NO debe retornar nada y NO puede ser asincrona
    []        //array de dependencias
              //cuando está vacío EL EFECTO se ejecuta UNA UNICA VEZ cuando se monta el componente
              //cuando tiene variables de dependencias EL EFECTO se ejecuta (cuando se monta y) CADA VEZ que varía/cambia alguna de esas variables
    //[show]  //en este ejemplo CADA VEZ que el booleano CAMBIE, se ejecuta la caalback de la L28
  )
  //console.log(carousel);

  return (
    <main className="grow flex flex-col items-center mt-[20px]">
      <h2 className="text-[25px] font-extrabold">{`${nombre1} ${nombre2}`}</h2>
      {show ? (<input onClick={()=>setShow(!show)} type='button' value='hide' className="hidden sm:flex bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full" />) : (<input onClick={()=>setShow(!show)} type='button' value='show' className="hidden sm:flex bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full" />)}
      {/* { (CONDICION) ? (QUE PASA SI ES true) : (QUE PASA SI ES false) } */}
      {show ? <Carousel data={carousel} /> : <h1 className="text-[24px] text-white hidden sm:flex" >click arriba para ver carousel</h1>}
      <p className="text-[20px] text-center my-5 sm:hidden">AUMENTA LA RESOLUCION PARA VER EL CAROUSEL</p>
    </main>
  );
}
