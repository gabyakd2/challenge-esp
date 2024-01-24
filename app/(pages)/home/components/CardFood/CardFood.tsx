"use client"
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IFood, useStoreDinner } from "@/app/store/storeFoods/storeDinner/storeDinner";
import foodsInfo from "@/app/helper/foodsInfo.json";

function CardFood() {
  const { setDinner } = useStoreDinner();
  const dinnerData: IFood[] | undefined = foodsInfo.sectionFoods[0].dinner
  setDinner(dinnerData);
// console.log(foodsInfo.sectionFoods[0])
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&webp=true&resize=375,341"
        title="green iguana"
        className="m-4 rounded-md"
      />
      <CardContent className="text-center">
        <Typography gutterBottom variant="h6" component="div">
          Nombre
        </Typography>
        <Typography variant="body2" color="text.secondary">
          00.00 $
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardFood