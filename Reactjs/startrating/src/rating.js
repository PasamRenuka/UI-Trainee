import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./styledcom";

const colorArray = ["#CF0812", "#FAAD14", "#85BA6A", "#1F5404"];


const arr = [
    {
        value: 1,
        color: '#CF0812'
    },
    {
        value: 2,
        color: '#CF0812'
    },
    {
        value: 3,
        color: '#85BA6A'
    },
    {
        value: 4,
        color: '#85BA6A'
    },
    {
        value: 5,
        color: '#1F5404'
    },
]

const Rate = () => {
  const [rate, setRate] = useState(0);
  const [color, setColor] = useState("");
  // console.log(this.givenRating);
  return (
    <Container>
      {arr.map((item, index) => {
        
        return (
          <label>
            <Radio
              type="radio"
              value={index}
              onClick={() => {
                setRate(index)
                console.log(item, index)
                console.log(colorArray[index-1])
                setColor(colorArray[index-1])
                


              }}
            />
            <Rating>
              <FaStar color={
                index<rate||index===rate?
                
                color:"grey"} />
            </Rating>
          </label>
        );
      })}
    </Container>
  );
};

export default Rate;
