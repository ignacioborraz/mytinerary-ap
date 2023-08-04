import { useState,useEffect } from "react";
import Carousel from "../components/Carousel";
import axios from "axios";

export default function Home() {

  const [show,setShow] = useState(true)
  const [data,setData] = useState([])
  const nombre1 = "My";
  const nombre2 = "Tinerary";
  useEffect(
    ()=>{
      axios('/data.json')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },        //callback que NO debe retornar nada y NO puede ser asincrona
    []        //array de dependencias
              //cuando está vacío EL EFECTO se ejecuta UNA UNICA VEZ cuando se monta el componente
              //cuando tiene variables de dependencias EL EFECTO se ejecuta (cuando se monta y) CADA VEZ que varía/cambia alguna de esas variables
    //[show]  //en este ejemplo CADA VEZ que el booleano CAMBIE, se ejecuta la caalback de la L28
  )

  return (
    <main className="grow flex flex-col items-center mt-[20px]">
      <h2 className="text-[25px] font-extrabold">{`${nombre1} ${nombre2}`}</h2>
      {show ? (<input onClick={()=>setShow(!show)} type='button' value='hide' className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full" />) : (<input onClick={()=>setShow(!show)} type='button' value='show' className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full" />)}
      {/* { (CONDICION) ? (QUE PASA SI ES true) : (QUE PASA SI ES false) } */}
      {show ? <Carousel data={data} /> : <h1 className="text-[24px] text-white" >click arriba para ver carousel</h1>}
    </main>
  );
}
