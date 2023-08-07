import { useParams } from 'react-router-dom'

export default function CityDetail() {
  const { city_id } = useParams()
  //este hook se engancha a la URL para evaluar todos los parametros dinamicos que tiene la URL
  //este hook devuelve un objeto donde cada CLAVE es la ruta dinamica definida en el enrutador
  //y donde cada VALOR es el valor de la URL
  return (
    <div>CityDetail of city {city_id} under construction</div>
  )
}
