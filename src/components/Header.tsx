import React, { useState } from "react";
import { Button } from "./index"
import { logo } from "../assets"
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, ChevronUp } from 'lucide-react';


const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [businessDropdown, setBusinessDropdown] = useState(false);
    const [productDropdown, setProductDropdown] = useState(false);
    const navigator = useNavigate()
    const handleClick = () => {
        navigator("/demo")
    }

    return (
        <div className="flex justify-between items-center h-20 p-8 shadow sticky top-0 backdrop-blur-md z-50">
            <Link to="/">
                <img className="h-12" src={logo} />
            </Link>

            <button
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <Menu />
            </button>

            <nav className={`
                ${isMobileMenuOpen ? 'block' : 'hidden'} 
                md:flex md:gap-8 font-bold
                absolute md:relative 
                top-20 md:top-0 
                left-0 md:left-auto 
                w-full md:w-auto 
                bg-white md:bg-transparent 
                shadow-lg md:shadow-none 
                p-8 md:p-0
                z-50 md:z-auto
                flex-col md:flex-row
                gap-6
            `}>
                {/* Business dropdown */}
                <div className=" group relative cursor-pointer">
                    <div className="flex justify-between md:justify-start items-center hover:text-amber-500">
                        <button onClick={() => setBusinessDropdown(!businessDropdown)}>BUSINESS</button>
                        {businessDropdown ? <ChevronUp /> : <ChevronDown />}
                    </div>

                    <ul className={`${businessDropdown ? "block" : "hidden"}
                        md:hidden md:group-hover:block 
                        mt-2 md:mt-0
                        relative md:absolute 
                        bg-gray-50 md:bg-white 
                        md:shadow-lg md:rounded-md 
                        p-4 md:p-6 
                        md:min-w-62 
                        font-medium
                        ml-4 md:ml-0
                    `}>
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
                </div>

                {/* Product dropdown - same pattern */}
                <div className="group relative cursor-pointer">
                    <div className="flex justify-between md:justify-start items-center hover:text-amber-500">
                        <button onClick={() => setProductDropdown(!productDropdown)} >PRODUCT</button>
                        {productDropdown ? <ChevronUp /> : <ChevronDown />}
                    </div>
                    <ul className={`${productDropdown ? "block" : "hidden"}
                        md:hidden md:group-hover:block 
                        mt-2 md:mt-0
                        relative md:absolute 
                        bg-gray-50 md:bg-white 
                        md:shadow-lg md:rounded-md 
                        p-4 md:p-6 
                        md:min-w-62 
                        font-medium
                        ml-4 md:ml-0
                    `}>
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
                </div>

                <Link to="/contact">
                    <div className="flex text-center md:text-left">CONTACT US</div>
                </Link>


                {/* Mobile demo button */}
                <Button
                    onclick={handleClick}
                    text="Request Demo"
                    classname="md:hidden bg-blue-500 hover:bg-blue-600"
                />
            </nav>

            {/* Desktop demo button */}
            <Button
                onclick={handleClick}
                text="Request Demo"
                classname="hidden md:block hover:bg-blue-600 text-white"
            />
        </div>
    )
}

export default Header