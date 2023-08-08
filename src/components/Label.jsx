/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom"

export default function Label({ options }) {
  return (
    <div className="hidden md:flex ms-5 gap-2 p-2 rounded-xl">
      {options.map(each=> <Anchor key={each.to} to={each.to} className="h-[50px] text-[20px] px-2 bg-white rounded-xl w-[100px] flex justify-center items-center mx-1" style={{backgroundColor:each.backgroundColor,color:each.color }}>{each.title}</Anchor>)}
    </div>
  )
}
