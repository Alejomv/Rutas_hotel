import React from 'react'


import Pie from '../pie/pie'
import Menu from '../menu/menu'

const Rooms = () => {

  const hotelRooms = [
    {
      id: 1,
      name: "Habitación Estándar",
      description: "Una cómoda habitación con todas las comodidades básicas.",
      price: "$100 por noche",
      amenities: ["WiFi", "TV", "Baño privado"]
    },
    {
      id: 2,
      name: "Habitación Doble",
      description: "Perfecta para parejas o amigos que viajan juntos.",
      price: "$150 por noche",
      amenities: ["WiFi", "TV", "Baño privado", "Mini Bar"]
    },
    {
      id: 3,
      name: "Suite",
      description: "Una experiencia de lujo con una vista increíble.",
      price: "$300 por noche",
      amenities: ["WiFi", "TV", "Baño privado", "Sala de estar", "Mini Bar"]
    }
  ];



  return (
    <>
    <Menu/>

   
      <div>
        <h1>Habitaciones</h1>
        {hotelRooms.map(room => (
          <div key={room.id} style={{ margin: '20px', padding: '10px', border: '1px solid #ccc' }}>
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <p><strong>Precio: </strong>{room.price}</p>
            <p><strong>Comodidades: </strong>{room.amenities.join(", ")}</p>
          </div>
        ))}
      </div>
 
    


    
    <Pie/>
    </>
  )
}

export default Rooms