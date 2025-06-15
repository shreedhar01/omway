import React from "react";

interface ButtonProps{
    text:string,
    onclick:React.MouseEventHandler<HTMLButtonElement>,
    classname?:string
}

const Button:React.FC<ButtonProps> = ({text,classname, onclick})=>{
    return (
        <div  className={`bg-brandColour rounded ${classname}`}>
            <button onClick={onclick} className="m-2" >{text}</button>
        </div>
    )
}

export default Button