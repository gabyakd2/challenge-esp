import { TextField } from "@mui/material";
import React from "react";

function CenterNav() {
  return (
    <div className="text-center mt-10 pb-28">
      <h1 className="text-5xl font-bold text-white">Nombre del Hotel</h1>
      <TextField
        placeholder="Hacer reserva"
        className="w-[400px] mt-7"
        InputProps={{
          style: {
            backgroundColor: "white"
          },
        }}
      />
    </div>
  );
}

export default CenterNav;
