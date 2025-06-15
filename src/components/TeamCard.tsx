import React from "react";

interface ITeamCard{
    image:string,
    name:string,
    title:string,
    date?:string
}

const TeamCard:React.FC<ITeamCard> = ({image,name,title,date="notvalue"})=>{
    return (
        <div className="w-80">
            <img src={image} alt="ceo_image" className="rounded"/>
            <p className="text-center font-bold">{name}</p>
            <p className="text-center text-neutral-700">{title}</p>
            {date !== "notvalue" ?  <p className="text-center text-neutral-700">{date}</p> : null}
        </div>
    )
}

export default TeamCard