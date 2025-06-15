import React from "react";
import { Button } from "../components"
import { Link, useNavigate } from "react-router-dom";
import { logo3 } from "../assets"
import {
    Facebook,
    Linkedin,
    Instagram
} from "lucide-react"

const Footer: React.FC = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/demo")
    }
    return (
        <footer className=" bg-stone-800 text-amber-50 bottom-0 w-full md:h-120 shadow ">

            <div className=" md:h-32 md:grid grid-cols-2  ">
                <div className="flex items-center p-2 md:p-8">
                    <p className="flex justify-center items-center text-2xl font-bold-">Empower businesses with innovative solutions that span the entire spectrum of digital services.</p>
                </div>
                <div className="flex justify-between md:justify-end items-center pl-4 pr-4 md:p-8">
                    <div>
                        <img className=" md:hidden h-12" src={logo3} alt="brand_logo" />
                    </div>
                    <Button
                        onclick={handleClick}
                        text="Request Demo"
                        classname=" hover:bg-blue-600"
                    />
                </div>
            </div>

            <div className=" p-2 md:h-72 md:grid grid-cols-2">
                <div>
                    <img className="hidden md:block h-12 m-8" src={logo3} alt="brand_logo" />
                </div>
                <div className="grid grid-cols-3">
                    <ul>
                        <li className=" font-bold">Business</li>
                        <Link to="/services/software_development">
                            <li className="hover:underline py-1">Software Development</li>
                        </Link>
                        <Link to="/services/web_solution">
                            <li className="hover:underline py-1">Web Solution</li>
                        </Link>
                        <Link to="/services/it_solution">
                            <li className="hover:underline py-1">IT Solution</li>
                        </Link>
                        <Link to="/services/automation_ai">
                            <li className="hover:underline py-1">Automation (AI)</li>
                        </Link>
                    </ul>

                    <ul>
                        <li className=" font-bold">Product</li>
                        <Link to="/product/membership_management">
                            <li className="hover:underline py-1">Membership Management</li>
                        </Link>
                        <Link to="/product/election_management">
                            <li className="hover:underline py-1">Election Management</li>
                        </Link>
                        <Link to="/product/education_management">
                            <li className="hover:underline py-1">Education Management</li>
                        </Link>
                        <Link to="/product/conference_management">
                            <li className="hover:underline py-1">Conference Management</li>
                        </Link>
                    </ul>

                    <ul>
                        <li className=" font-bold">Company</li>
                        <Link to="/aboutus">
                            <li className="hover:underline py-1">About Us</li>
                        </Link>
                        <Link to="/career">
                            <li className="hover:underline py-1">Career</li>
                        </Link>
                        <Link to="/team">
                            <li className="hover:underline py-1">Team</li>
                        </Link>
                    </ul>

                </div>

            </div>

            <div className="flex justify-between p-2 md:h-16 md:grid grid-cols-2">
                <div className=" flex items-center md:pl-8">
                    <p>© Copyright 2025. All Rights Reserved</p>
                </div>

                <div className="flex gap-4">
                    {/* noopener: Prevents the new page from accessing window.opener
                    noreferrer: Prevents sending the HTTP Referer header to the external site */}
                    <a href="https://www.facebook.com/omwaytech/" target="_blank" rel="noopener noreferrer">
                        <Facebook />
                    </a>

                    <a href="https://www.linkedin.com/company/omway-technologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                        <Linkedin />
                    </a>

                    <a href="https://www.instagram.com/omwaytechnologies/" target="_blank" rel="noopener noreferrer">
                        <Instagram />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer