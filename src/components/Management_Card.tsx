import React from "react";

interface ICard{
    image:string,
    title:string,
    description:string,
    onclick:React.MouseEventHandler<HTMLFormElement>
}

const Management_Card:React.FC<ICard> = ({image, title, description,onclick})=>{
    return(
        <form onClick={onclick} className=" flex flex-col justify-center items-center w-64 h-80 rounded-2xl shadow p-4">
            <img className=" w-32 " src={image} alt="" />
            <h1 className="font-bold text-brandColour">{title}</h1>
            <p className=" text-center">{description}</p>
        </form>
    )
}

export default Management_Card