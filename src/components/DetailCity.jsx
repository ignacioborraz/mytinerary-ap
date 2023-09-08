import { Link as Anchor } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import itinerary_actions from "../store/actions/itineraries";
const { read_itineraries_from_city } = itinerary_actions;

// eslint-disable-next-line react/prop-types
export default function DetailCity({ src, alt, text, id }) {
  const [show, setShow] = useState(false);
  const itineraries = useSelector(
    (store) => store.itineraries.itineraries_from_city
  );
  //console.log(itineraries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(read_itineraries_from_city({ city_id: id }));
  }, []);
  return (
    <section className="w-[300px] md:w-4/5 flex flex-col items-center p-2 m-2 bg-white">
      <img src={src} alt={alt} />
      <p className="text-[20px] my-2">{text}</p>
      <span
        onClick={() => setShow(!show)}
        className="shadow bg-primary hover:bg-secondary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer w-[150px] text-center"
      >
        {show ? "hide" : "+info"}
      </span>
      {/* {show ? () : ()} */}
      {show &&
        itineraries.map((each, index) => (
          <p className="mt-2" key={index}>
            {each.name}
          </p>
        ))}
    </section>
  );
}
