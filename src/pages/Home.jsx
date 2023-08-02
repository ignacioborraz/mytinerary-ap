import Arrow from "../components/Arrow";
import CardPolaroid from "../components/CardPolaroid";

export default function Home() {
  const nombre1 = "My";
  const nombre2 = "Tinerary";
  let data = [
    { id: "am1", city: "Cancun", photo: "/img/america/cancun.jpg" },
    { id: "am2", city: "New York", photo: "/img/america/newyork.jpg" },
    { id: "am3", city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg"},
    { id: "am4", city: "Ushuaia", photo: "/img/america/ushuaia.jpg" },
    { id: "as1", city: "Bangkok", photo: "/img/asia/bangkok.jpg" },
    { id: "as2", city: "Pekin", photo: "/img/asia/pekin.jpg" },
    { id: "as3", city: "Singapur", photo: "/img/asia/singapur.jpg" },
    { id: "as4", city: "Tokyo", photo: "/img/asia/tokio.jpg" },
    { id: "eu1", city: "Ibiza", photo: "/img/europe/ibiza.jpg" },
    { id: "eu2", city: "London", photo: "/img/europe/london.jpg" },
    { id: "eu3", city: "Paris", photo: "/img/europe/paris.jpg" },
    { id: "eu4", city: "Roma", photo: "/img/europe/roma.jpg" },
    { id: "oc1", city: "Majuro", photo: "/img/oceania/majuro.jpg" },
    { id: "oc2", city: "Sidney", photo: "/img/oceania/sidney.jpg" },
    { id: "oc3", city: "Suva", photo: "/img/oceania/suva.jpg" },
    { id: "oc4", city: "Wellington", photo: "/img/oceania/wellington.jpg" },
  ];

  return (
    <main className="grow flex flex-col items-center mt-[20px]">
      <h2 className="text-[25px] font-extrabold">{`${nombre1} ${nombre2}`}</h2>
      <p className="text-[18px]">{`${nombre1} ${nombre2}`}</p>
      <div className="flex justify-center items-center">
        <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" />
        <div className="flex w-11/12 flex-wrap justify-center mt-5">
          {data.slice(12, 16).map((each, index) => (
            <CardPolaroid
              key={index}
              src={each.photo}
              alt={each.id}
              text={each.city}
            />
          ))}
        </div>
        <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </div>
    </main>
  );
}
