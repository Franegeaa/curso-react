import { useEffect, useState } from "react";

function App() {
  const [enable, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})

  useEffect(() => {
    console.log('effect', {enable})

    const handleMove = (event) => {
      const {clientX, clientY} = event
      setPosition({x: clientX, y: clientY})
    }

    if (enable) {
      window.addEventListener('pointermove', handleMove)
    }
    
    return () => { //Se ejecuta cuando se desmonta el componente
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])

  return (
    <main>
      <div style={{
        position: "absolute",
        backgroundColor: "#09f",
        borderRadius: "50%",
        opacity: "0.8",
        pointerEvents: "none",
        left: -20,
        top: -20,
        width: 40,
        height:40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}/>
      <button onClick={() => setEnabled(!enable)}>
        {enable ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App
