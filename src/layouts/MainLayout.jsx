import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className="w-full min-h-screen bg-red-500 flex flex-col">
      <NavBar />
      {/* {console.log(nombre2)} */}
      {/* esto es un comentario */}
      {/* ACA SE DEBE INSERTAR EL CONTENIDO DINAMICO DE CADA VISTA */}
      <Outlet />
      <Footer />
    </div>
  );
}
