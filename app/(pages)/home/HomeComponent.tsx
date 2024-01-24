import React from "react";
import CardFood from "./components/CardFood/CardFood";


function HomeComponent() {
  return (
    <div>
      <p className="text-3xl font-semibold text-center mt-10">Tus recomendaciones</p>
      <CardFood />
    </div>
  )
}

export default HomeComponent