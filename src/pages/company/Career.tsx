import React from "react";
import { CareerCard } from "../../components";
import { useNavigate } from "react-router-dom";

const Career: React.FC = () => {
    const navigate = useNavigate()
    const handleClick = (param:string)=>{
        navigate(`/career/${param}`)
    }

    const careers = [
        {
            title:"Full Stack Developer",
            type:"Full Time",
            location:"Kathmandu",
        },
        {
            title:"UI Frontend Developer",
            type:"Full Time",
            location:"Kathmandu"
        },
        {
            title:"Quality Assurance (QA)",
            type:"Full Time",
            location:"Kathmandu"
        }
    ]
    return (
        <div>
            <p className="text-4xl font-bold text-brandColour text-center m-8">Career</p>
            <div className=" flex flex-col justify-center ml-5 md:ml-20 mr-5 md:mr-20  mt-50 gap-5 mb-10">
                <p className="text-neutral-500">At Omway Technologies, we are always looking for talents both for entry level and experienced positions. We hire well-rounded and highly motivated candidates with excellent academic qualifications. We offer positions that will train new graduates to the highest standards of IT practice. </p>
                {careers.map(item => 
                    <CareerCard title={item.title} type={item.type} location={item.location} onclick={()=> handleClick(`${item.title.replace(/\s+/g,"_")}`)} />
                )}
            </div>
        </div>
    )
}

export default Career