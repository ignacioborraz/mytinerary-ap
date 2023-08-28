import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_city } = city_actions;
import DetailCity from "../components/DetailCity";

export default function CityDetail() {
  const { city_id } = useParams();
  const dispatch = useDispatch();
  const city = useSelector((store) => store.cities.city);
  //console.log(city);
  useEffect(() => {
    dispatch(read_city({ id: city_id }));
  }, []);
  return (
    <article className="flex grow flex-col justify-start items-center mt-[20px]">
      <DetailCity
        src={city.photo}
        alt={city_id}
        text={city.city}
        id={city_id}
      />
    </article>
  );
}
