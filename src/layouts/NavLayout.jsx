import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom"

export default function NavLayout() {
  return (
    <div className="w-full min-h-screen bg-red-500 flex flex-col">
      <NavBar />
      {/* contenido dinamico de la interfaz */}
      <Outlet />
    </div>
  );
}
