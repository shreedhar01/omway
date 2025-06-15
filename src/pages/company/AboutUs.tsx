import React from "react";

const AboutUs: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-4xl font-bold text-brandColour text-center m-8">About Us</p>
            <div className="md:grid grid-cols-2">
                <p className="m-16">At Omway Technologies, we are more than just a technology company; we are your partner in navigating the dynamic digital landscape. Our mission is to empower businesses with innovative solutions that span the entire spectrum of digital services. We believe that technology, when harnessed effectively, can be a game-changer, and that's what we bring to the table. Explore our wide range of services, including software development, web solutions, IT solutions, automation (AI), and product design.</p>
                <div className="flex flex-col text-2xl font-bold text-brandColour text-center gap-2">
                    <div className="text-left">
                        <p>Contact</p>
                        <p className=" font-normal">+977 01 5922920</p>
                    </div>
                    <div className="text-left">
                        <p>Email</p>
                        <p className="font-normal">info@omwaytech.com</p>
                    </div>
                    <div className="text-left">
                        <p>Location</p>
                        <p className="font-normal">Shankhamul-31, Kathmandu</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs