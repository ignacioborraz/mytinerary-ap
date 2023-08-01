import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function MainLayout({ children }) {
    console.log(children);
  return (
    <div className="w-full min-h-screen bg-red-500 flex flex-col">
    <NavBar />
    {/* {console.log(nombre2)} */}
    {/* esto es un comentario */}
    {/* ACA SE DEBE INSERTAR EL CONTENIDO DINAMICO DE CADA VISTA */}
    {children}
    <Footer />
  </div>
  )
}