function App() {
  const nombre1 = 'My'
  const nombre2 = 'Tinerary'
  return (
    <div className="w-full min-h-screen bg-red-500 flex flex-col">
      <header className="h-[87px] bg-red-200 flex justify-center items-center">esto va a ser la barra de navegacion</header>
      {/* {console.log(nombre2)} */}
      {/* esto es un comentario */}
      <main className="grow">{`${nombre1} ${nombre2}`}</main>
      <footer className="h-[49px] bg-pink-200">esto va a ser el footer</footer>
    </div>
  )
}

export default App
