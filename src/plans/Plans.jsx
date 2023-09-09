import React from 'react'

import Pie from '../pie/pie'
import Menu from '../menu/menu'

const Plans = () => {
  // Datos de ejemplo para los planes turísticos
  const touristPlans = [
    {
      id: 1,
      title: "Tour por el Centro Histórico",
      description: "Un emocionante tour de 3 horas por el centro histórico.",
      price: "$50"
    },
    {
      id: 2,
      title: "Excursión a la Montaña",
      description: "Un día completo de senderismo y exploración.",
      price: "$100"
    },
    {
      id: 3,
      title: "Clase de Surf",
      description: "2 horas de clase de surf con instructores profesionales.",
      price: "$70"
    }
  ]

 return (
    <>
    <Menu/>

    <div>
      <h1>Planes Turísticos</h1>
      <div>
        {touristPlans.map(plan => (
          <div key={plan.id} style={{margin: '20px', padding: '10px', border: '1px solid #ccc'}}>
            <h2>{plan.title}</h2>
            <p>{plan.description}</p>
            <p><strong>Precio: </strong>{plan.price}</p>
          </div>
        ))}
      </div>
    </div>
  




    
    <Pie/>
    </>
  )
}

export default Plans

