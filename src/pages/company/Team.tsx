import React from "react";
import { TeamCard } from "../../components";
import {
    ceo,
    person1,
    person3,           //Aayush Timilsina   Developer / Programmer
    person4,        //Suman Karn    Developer / Programmer
    person5,        //Bhumi Bhatta      Frontend Developer
    person7,            //Laxmi Pokharel     HR / Finance
    person6,            //Sanish Shrestha   UI Designer     2023-2025
    person2,        //Jhak Karki    Developer / Programmer  2023-2025
} from "../../assets/person"

const Team: React.FC = () => {
    const teams = [
        {
            image: ceo,
            name: "Suresh Rijal",
            title: "CEO/ Business Development Manager"
        },
        {
            image: person1,
            name: "Dorna KC",
            title: "Team Lead / Developer"
        },
        {
            image: person3,
            name: "Aayush Timilsina",
            title: "Developer / Programmer"
        },
        {
            image: person4,
            name: "Suman Karn",
            title: "Developer / Programmer"
        },
        {
            image: person5,
            name: "Bhumi Bhatta",
            title: "Frontend Developer"
        },
        {
            image: person7,
            name: "Laxmi Pokharel",
            title: " HR / Finance"
        }
    ]
    const oldMates = [
        {
            image:person6,
            name:"Sanish Shrestha",
            title:"UI Designer",
            date:"2023-2025"
        },
        {
            image:person2,
            name:"Jhak Karki",
            title:"Developer / Programmer",
            date:"2023-2025"
        }
    ]
    return (
        <div className="mb-8">
            <p className="text-4xl font-bold text-brandColour text-center m-8">Team Members</p>
            <div className="bg-neutral-300 mb-8 rounded-b-3xl">
                <p className="text-3xl font-mono text-brandColour text-center m-8">Active Team</p>
                <p className="text-3xl font-normal text-brandColour text-center m-8">"Today’s force behind tomorrow’s success."</p>
                <div className="flex flex-wrap justify-center items-center gap-4">
                    {
                        teams.map(item =>
                            <TeamCard image={item.image} name={item.name} title={item.title} />
                        )
                    }
                </div>
            </div>
            <div>
                <p className="text-3xl font-mono text-brandColour text-center m-8">Legacy Team</p>
                <p className="text-3xl font-normal text-brandColour text-center m-8">"Yesterday’s contributers of today’s progress."</p>
                <div className="flex flex-wrap justify-center items-center gap-4">
                    {
                        oldMates.map(item =>
                            <TeamCard image={item.image} name={item.name} title={item.title} date={item.date} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Team