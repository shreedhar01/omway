import React from 'react';
import {
  conference_management,
  dashboard,
  education_management,
  election_management,
  man_1,
  man_2,
  membership_management
} from "../assets"

import { Management_Card } from '../components';
import { useNavigate } from 'react-router-dom';

import {
  Code,
  Globe,
  Cloud,
  Bot,
  Star
} from "lucide-react"

import { Button } from "../components"

import {
  globe,
  aws,
  google,
  digital_ocean,
  laravel,
  python,
  vue,
  upCloude,

} from "../assets"

import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
  client16
} from "../assets/landing/client"

import { client } from '../assets/person';

const Landing: React.FC = () => {
  const navigate = useNavigate()

  const handlemanagementclick = (e: React.MouseEvent<HTMLFormElement>, link: string) => {
    e.preventDefault()
    navigate(link)
  }

  const handleDiscoverMoreClick = () => {
    navigate("/aboutus")
  }

  const handleServiceClick = (e: React.MouseEvent<HTMLElement>, link: string) => {
    e.preventDefault()
    navigate(link)
  }

  const managementCardInfo = [
    {
      image: `${membership_management}`,
      title: "Membership Management",
      description: "Revolutionize Your Membership Management System (MMS) with Omway Technologies",
      link: "/product/membership_management"
    },
    {
      image: `${conference_management}`,
      title: "Conference Management",
      description: "Adapt new technology of Conference Management System (CMS) with Omway Technologies",
      link: "/product/conference_management"
    },
    {
      image: `${education_management}`,
      title: "Education Management",
      description: "Grow your educational organization digitally with Education Management Information System (EMIS)",
      link: "/product/education_management"
    },
    {
      image: `${election_management}`,
      title: "Election Management",
      description: "The Professional Organization's Online Election Management System (EMS)",
      link: "/product/election_management"
    }
  ]

  const serviceCardInfo = [
    {
      image: Code,
      title: "Software Development",
      description: "Turning Ideas into Reality",
      link: "/services/software_development"
    },
    {
      image: Globe,
      title: "Web Solution",
      description: "Crafting Web Experiences on Interface",
      link: "/services/web_solution"
    },
    {
      image: Cloud,
      title: "IT Solution",
      description: "Connecting business needs with Technology",
      link: "/services/it_solution"
    },
    {
      image: Bot,
      title: "Automation (AI)",
      description: "Presenting virtual imagination reality",
      link: "/services/automation_ai"
    },
  ]

  const images = [
    { image: aws },
    { image: google },
    { image: digital_ocean },
    { image: upCloude },
    { image: laravel },
    { image: python },
    { image: vue },
  ]

  const clientPoster = [
    { imag: client1, link: "https://nams.edu.np/en" },
    { imag: client2, link: "https://ayurvedacampus.edu.np/" },
    { imag: client3, link: "https://shas.pu.edu.np/" },
    { imag: client4, link: "https://kahs.edu.np/" },
    { imag: client5, link: "https://omwaytechnologies.com/#" },
    { imag: client6, link: "https://ace.edu.np/" },
    { imag: client7, link: "https://www.cmc.edu.np/" },
    { imag: client8, link: "https://kistmcth.edu.np/" },
    { imag: client9, link: "https://nma.org.np/" },
    { imag: client10, link: "https://nast.gov.np/" },
    { imag: client11, link: "https://nph.nepalpolice.gov.np/" },
    { imag: client12, link: "https://www.neupanelegal.com/" },
    { imag: client13, link: "https://www.triton.edu.np/" },
    { imag: client14, link: "https://omwaytechnologies.com/#" },
    { imag: client15, link: "https://omwaytechnologies.com/#" },
    { imag: client16, link: "https://omwaytechnologies.com/#" }
  ]

  return (
    <>
      {/* hero text section */}
      <div>
        <div className=' flex flex-col justify-center text-center text-brandColour font-bold text-6xl pt-16'>
          <span >Omway, A Root for </span><span> Modern success</span>
        </div>
        <p className=' flex justify-center text-center text-2xl p-2 m-2 md:p-4'>Explore modern cybernated world with Omway Technologies.</p>
      </div>

      {/* hero image section */}
      <div className='flex items-center justify-center p-16 '>
        <div className=' relative w-200 md:max-w-3xl '>
          <img className='rounded-2xl' src={dashboard} alt="dashboard image" />

          <img className='hidden md:block absolute transform -translate-y-80 ' src={man_1} alt="left man image" />
          <img className='hidden md:block absolute transform translate-x-140 -translate-y-90 ' src={man_2} alt="right man image" />
        </div>
      </div>

      {/* product section */}
      <div className='flex flex-col justify-center items-center gap-6 md:py-4 md:m-16'>
        <p className='text-brandColour text-2xl font-bold'>Our Products</p>
        <div className='flex flex-col md:flex-row gap-6 md:py-4 md:md-16'>
          {managementCardInfo.map((item) => (
            <Management_Card
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
              onclick={(e) => handlemanagementclick(e, item.link)}
            />
          )
          )}
        </div>
      </div>

      {/* service section */}
      <div className=' bg-slate-200 rounded-b-4xl flex flex-col md:grid grid-cols-3'>
        <div className='col-span-1 pl-16'>
          <h1 className='pt-16 font-bold m-4'>Our Services</h1>
          <p className=' text-brandColour text-3xl font-bold m-4'>Let’s Inspect our Digital
            Business spaces</p>
          <p className='pr-16 m-4'>
            At Omway Technologies, we are more than just a technology company; we are your partner in navigating the dynamic digital landscape. Our mission is to empower businesses with innovative solutions that span the entire spectrum of digital services. We believe that technology, when h...
          </p>
          <Button text='Discover More' onclick={handleDiscoverMoreClick} classname='text-white w-fit m-4' />
        </div>

        <div className='flex flex-wrap justify-center items-center col-span-2 '>
          {
            serviceCardInfo.map((item) => (
              <div onClick={(e) => handleServiceClick(e, item.link)} key={item.title} className='flex flex-col justify-center items-center text-center w-64 h-40 rounded-2xl shadow m-14 p-4'>
                <item.image className=' text-brandColour ' />
                <h1 className="font-bold text-brandColour">{item.title}</h1>
                <p className=" text-center">{item.description}</p>
              </div>
            ))
          }
        </div>
      </div>

      {/* operation platform */}
      <div className='flex flex-col md:grid grid-cols-2 m-8 p-3'>
        <div className='flex justify-center items-center text-brandColour col-span-1 '>
          <div>
            <p className=' font-bold'>Operating <span className='text-2xl underline'>Platforms</span></p>
            <p className='text-3xl font-bold'>We deliver best with <span className='block'>
              latest favorite platforms
            </span>
            </p>
          </div>
        </div>

        <div className='flex justify-center items-center col-span-1'>
          <div className=' relative'>
            <img src={globe} alt="globe image" className=' slow-rotate w-120' />
          </div>
          <div className=' flex flex-wrap items-center justify-center absolute gap-8 w-100'>
            {images.map((item) => (
              <div key={item.image}>
                <img src={item.image} alt={item.image} className=' w-15' />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* clients */}
      <div>
        <div className='flex flex-col justify-center items-center text-brandColour font-bold m-8'>
          <p className=' text-2xl '>Our Clients</p>
          <h1 className=' text-center text-4xl'>Trusted our services and products by</h1>
          <p className='text-2xl'>__  _______</p>
        </div>

        <div className='flex flex-wrap justify-center items-center m-16'>
          {
            clientPoster.map((item) => (
              <div key={item.imag} className='border border-neutral-300 md:w-50'>
                <a href={`${item.link}`} target="_blank" rel="noopener noreferrer">
                  <img src={item.imag} alt="" />
                </a>
              </div>
            ))
          }
        </div>
      </div>

      {/* review */}
      <div className='flex flex-col justify-center items-center text-center text-brandColour m-8 font-bold'>
        <p className='text-2xl'>Review</p>
        <h1 className='text-4xl'>Our Happy Customers</h1>
        <p className='text-2xl'>__  _______</p>

        <div className='m-16 flex flex-col justify-center items-center'>
          <p className=' text-neutral-600 font-mono text-center'>Great Services</p>
          <div className='flex justify-center items-center gap-2 m-4 text-amber-300'>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className='mt-16 md:ml-64 md:mr-64 font-normal text-neutral-700 text-2xl '>As a health care professional, I have found omway Technologies's solutions to be instrumental in streamlining our practice. The intuitive interface and robust features have signigicantly improved our efficiency, allowing us to focus more on patient care</p>
          <p>________________________________________</p>
          <img src={client} alt="client_image" className='w-32 border border-black rounded-b-full rounded-t-full m-8 shadow ' />
          <p className='font-extrabold'>DR SARAD GAJURYAL</p>
          <p className='font-normal'>Annapurna Neurological Institute & Allied Sciences</p>
          <p className='font-normal text-neutral-700'>HOSPITAL DIRECTOR</p>

        </div>

      </div>

    </>
  );
};

export default Landing;