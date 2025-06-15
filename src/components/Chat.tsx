import React, { useEffect, useState } from "react";
import {
    MessageCircleMore,
    Bot,
    User,
    Send
} from "lucide-react"

import Groq from "groq-sdk";
import Markdown from "react-markdown";

interface IMessage {
    type: string,
    message: string
}

const Chat: React.FC = () => {
    const [active, setActive] = useState(false)
    const [value, setValue] = useState("")
    const [message, setMessage] = useState<IMessage[]>([])
    const groq = new Groq({ apiKey: import.meta.env.VITE_GROQ_KEY, dangerouslyAllowBrowser: true });

    useEffect(() => {
        const defaultValue = [{ type: "assistant", message: "How can I help you today?" }]
        setMessage(defaultValue)
    }, [])

    const handleclick = () => {
        setActive(!active)
    }

    const handlechange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }

    const handlesubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();

        if (value.trim() === "") return;

        const newMessage: IMessage = { type: "user", message: value };
        const updatedMessages = [...message, newMessage];
        setMessage(updatedMessages);

        setValue("");

        try {
            const chatCompletion = await groq.chat.completions.create({
                messages: [
                    {
                        role: "system",
                        content: `You are the Customer Service chatbot for **OmWay Technologies**.

**Our Services**

1. **Business**

   * **Software Development**: Design, code, test & maintain custom applications.
   * **Web Solutions**: End‑to‑end website design, development, hosting & digital marketing.
   * **IT Solutions**: Managed IT, infrastructure optimization & support.
   * **Automation & AI**: AI‑driven process automation, machine learning & intelligent workflows.

2. **Products**

   * **Membership Management**: Full‑featured system for subscriptions, renewals & member engagement.
   * **Election Management**: Secure online voting, ballot creation & results reporting.
   * **Education Management**: Campus‑wide EMIS for student records, scheduling & analytics.
   * **Conference Management**: Event planning, registration, attendance tracking & post‑event analysis.

If asked about anything else, apologize and note that these are the services we offer in very consise way. and give response consise

Location
Shankhamul-31
Kathmandu, Nepal

Make a Call
+977 01 5922920
+977-9851079343

Send a Mail
info@omwaytech.com

website for book demo
omwaytechnologies.com/contact-us
if some one want to develop or have more query. You can say please fill the form of demo request 
never ever try to justify like "I'm a machine learning model, trained on a vast amount of text data....." if youser type something random just try to diver to *Omway Technologies* topics
`
                    },
                    ...updatedMessages.map(item => ({
                        role: item.type as 'user' | 'assistant',
                        content: item.message
                    }))
                ],
                model: "meta-llama/llama-4-scout-17b-16e-instruct",
            });

            const botResponse = await chatCompletion.choices[0]?.message?.content || "Sorry, I couldn't process that.";
            const botMessage: IMessage = { type: "assistant", message: botResponse };
            setMessage(prev => [...prev, botMessage]);
        } catch (error) {
            console.error("Error:", error);
            const errorMessage: IMessage = { type: "assistant", message: "Sorry, something went wrong." };
            setMessage(prev => [...prev, errorMessage]);
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handlesubmit();
        }
    }


    return (
        <div className=" fixed right-8 bottom-10 z-50 ">
            <div className="relative">
                <MessageCircleMore size={50} onClick={handleclick} className=" text-red-600" />
                <div>
                    {
                        active && <div className=" absolute bottom-0 right-0 w-100 h-150 backdrop-blur rounded-2xl gap-4">
                            <button onClick={handleclick} className="bg-red-400 m-2 rounded">close</button>
                            <div className="overflow-auto h-120 px-2 pb-2">
                                {message.map((item, index) => (
                                    item.type === "user" ?
                                        <div key={index} className="flex justify-end m-2">
                                            <p className=" rounded  text-right bg-neutral-300 max-w-64 p-2">{item.message}</p>
                                            <User className=" bg-brandColour rounded-b-full rounded-t-full text-white m-2" />
                                        </div>
                                        :
                                        <div key={index} className="flex m-2">
                                            <Bot className=" bg-brandColour rounded-b-full rounded-t-full text-white m-2" />


                                            <p className=" bg-neutral-300 text-left max-w-64 p-4 rounded">
                                                <Markdown>
                                                    {item.message}
                                                </Markdown>
                                            </p>

                                        </div>
                                ))
                                }
                            </div>
                            <div className=" flex">
                                <textarea
                                    value={value}
                                    onChange={handlechange}
                                    onKeyDown={handleKeyPress}
                                    name="message" id=""
                                    className="bg-white w-full border max-h-24   "
                                    placeholder="Enter your query."
                                >

                                </textarea>
                                <Send onClick={handlesubmit} size={48} />
                            </div>

                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Chat