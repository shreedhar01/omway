import React from "react";
import {Button} from "./index"

interface ICareerCard {
    title:string,
    type:string,
    location:string,
    onclick:React.MouseEventHandler<HTMLButtonElement>,
}

const CareerCard:React.FC<ICareerCard> = ({title,type,location,onclick})=>{
    return(
        <div className=" flex flex-wrap justify-between items-center md:h-20 bg-neutral-300 rounded p-4">
            <p className="text-2xl font-bold">{title}</p>
            <p className="font-medium">{type}</p>
            <p className="font-medium">{location}</p>
            <Button text="Apply Now" classname="text-white hover:bg-blue-600" onclick={onclick}/>
           {/* <button onClick={onclick} className="m-2" >Apply Now</button> */}
        </div>
    )
}

export default CareerCard