import React, { useEffect, useState } from "react";

interface IServices {
    thing?:string,
    main:string,
    title: string[],
    content: {}[]
}


const Services: React.FC<IServices> = ({main, title, content,thing ="Services" }) => {
    const [displayedContent, setDisplayedContent] = useState<string>("loading....");
    useEffect(() => {
        const firstContentObject = content[0] as any;
        if (firstContentObject && firstContentObject[title[0]]) {
            setDisplayedContent(firstContentObject[title[0]]);
        }
    }, [])

    const handleclick = (e: React.MouseEvent<HTMLButtonElement>, itemKey: string) => {
        e.preventDefault();
        const contentObject:any = content.find(obj => obj.hasOwnProperty(itemKey));
        if (contentObject) {
            setDisplayedContent(contentObject[itemKey]);
        } else {
            setDisplayedContent("Content not found.");
        }
    }


    return (
        <div className=" flex flex-col justify-center items-center m-16">
            <p className="text-4xl font-bold text-brandColour text-center">{thing}</p>
            <p className="m-8 text-center">{main.toUpperCase()}</p>
            <div className="flex flex-col md:flex-row w-full justify-center items-center gap-6 p-6 bg-neutral-300 rounded-lg shadow-inner">
                {
                    title.map((item, index) => (
                        <button 
                            key={index}
                            onClick={(e) => handleclick(e, item)} 
                            className="px-6 py-3 text-2xl font-semibold border-2 border-gray-400 hover:border-gray-600 focus:bg-brandColour focus:text-white focus:border-brandColour rounded-lg shadow-md hover:shadow-lg  min-w-[150px] bg-white hover:bg-gray-50 "
                        >
                            {item}
                        </button>
                    ))
                }
            </div>
            <div dangerouslySetInnerHTML={{ __html: displayedContent }} className="text-left m-8 text-neutral-500">
            </div>
            {/* <p className="text-left m-8 text-neutral-500">{displayedContent}</p> */}

        </div>
    )
}

export default Services