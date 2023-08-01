import Home from "./pages/Home"
import MainLayout from "./layouts/MainLayout"

function App() {

    return (
      <MainLayout>
        <Home />
        {/* POR AHORA ESTA LLAMANDO A LA UNICA INTERFAZ QUE TENEMOS DEFINIDA */}
      </MainLayout>
    )
}

export default App
