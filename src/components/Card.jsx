import React from "react";

const Card = ({ userName, userMascota }) => {
  return (
    <div>
      <h3>Mi nombre es: {userName} </h3>
      <h3>Y mi mascota se llama: {userMascota} </h3>
    </div>
  );
};

export default Card;