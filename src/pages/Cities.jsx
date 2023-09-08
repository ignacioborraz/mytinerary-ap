import { useState, useEffect, useRef } from "react";
import CardCity from "../components/CardCity";
import { useSelector, useDispatch } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_cities } = city_actions;

export default function Cities() {
  const cities = useSelector((store) => store.cities.cities);
  const [reEffect, setReEffect] = useState(true);
  const text = useRef();
  const dispatch = useDispatch();
  //console.log(cities);
  useEffect(() => {
    dispatch(read_cities({ text: text.current?.value }));
  }, [reEffect]);
  function handleFilter() {
    //console.log(text.current.value);
    setReEffect(!reEffect);
  }
  return (
    <article className="flex grow flex-col justify-start items-center mt-[20px]">
      <input
        ref={text}
        type="text"
        name="text"
        id="text"
        onKeyUp={handleFilter}
        className="w-[300px] p-2 m-4 bg-white appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
      />
      <section className="flex flex-wrap justify-evenly mb-2">
        {cities.map((each) => (
          <CardCity
            key={each._id}
            src={each.photo}
            alt={each._id}
            text={each.city}
            id={each._id}
          />
        ))}
      </section>
    </article>
  );
}
