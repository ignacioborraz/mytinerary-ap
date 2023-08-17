import { useState,useEffect,useRef } from 'react'
import axios from 'axios'
import apiUrl from '../apiUrl'
import CardCity from '../components/CardCity'

export default function Cities() {
  const [cities,setCities] = useState([])
  const [reEffect,setReEffect] = useState(true)
  const text = useRef()
  useEffect(
    ()=> {
      axios(apiUrl+'cities?city='+text.current.value)
        //.then(res=>console.log(res.data.response))  //en lugar de mostrarlo en consola
        .then(res=>setCities(res.data.response))  //lo seteo en una variable de estado para que se muestre en la vista
        .catch(err=>console.log(err))
    },[reEffect]
  )
  function handleFilter() {
    console.log(text.current.value);
    setReEffect(!reEffect)
  }
  return (
    <>
    <input ref={text} type="text" name="text" id="text" onKeyUp={handleFilter} />
    {cities.map(each=><CardCity key={each._id} src={each.photo} alt={each._id} text={each.city} id={each._id} />)}
    </>
  )
}
