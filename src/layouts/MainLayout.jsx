import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div
      className="w-full min-h-screen bg-white flex flex-col justify-between
      sm:bg-purple-200
      md:bg-purple-400
      lg:bg-purple-600
      xl:bg-purple-950 xl:w-[90vw] xl:m-auto"
    >
      <NavBar />
      {/* {console.log(nombre2)} */}
      {/* esto es un comentario */}
      {/* ACA SE DEBE INSERTAR EL CONTENIDO DINAMICO DE CADA VISTA */}
      <Outlet />
      <Footer />
    </div>
  );
}
