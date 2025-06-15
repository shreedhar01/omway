import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";


interface Iform {
    name: string,
    email: string,
    phone: string,
    address: string,
    subject: string,
    content: string
}

interface IContactUs {
    titles?: string
}

const ContactUs: React.FC<IContactUs> = ({ titles = "Contact Us" }) => {
    const [data, setData] = useState({} as Iform)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Iform>()
    const submit: SubmitHandler<Iform> = data => setData(data)

    return (
        <div>
            <p className="text-4xl font-bold text-brandColour text-center m-8">{typeof titles === 'string' ? titles : <title />}</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto p-6">
                <div className="space-y-6">
                    <div className="text-center lg:text-left">
                        <p className="text-2xl font-bold text-brandColour mb-4">Contact Us</p>
                        <p className="text-3xl font-bold text-brandColour leading-tight">
                            Feel Free to <span className="text-blue-600 underline ">Drop your thoughts</span>
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(submit)} className="space-y-6 bg-white p-6 rounded-lg shadow-lg border">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name*</label>
                                <input
                                    placeholder="Your Name"
                                    {...register("name", { required: true })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email*</label>
                                <input
                                    placeholder="Your email"
                                    {...register("email", { required: true })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone</label>
                                <input
                                    placeholder="Your phone"
                                    {...register("phone", { required: true })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="address" className="block text-sm font-semibold text-gray-700">Address</label>
                                <input
                                    placeholder="Your address"
                                    {...register("address", { required: true })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                                />
                                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">Subject*</label>
                            <textarea
                                placeholder="Your subject"
                                {...register("subject", { required: true })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 resize-none h-20"
                            />
                            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="content" className="block text-sm font-semibold text-gray-700">Message*</label>
                            <textarea
                                placeholder="Your message"
                                {...register("content", { required: true })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 resize-none h-32"
                            />
                            {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-brandColour text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform "
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div className=" p-6 rounded-lg shadow-lg border">
                    <div className="sticky top-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            You Just Submit
                        </h3>
                        <div className="space-y-3 bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                            <div className="flex items-start">
                                <span className="font-semibold text-gray-600 w-16">Name:</span>
                                <span className="text-gray-800 flex-1">{data.name || "Not entered yet"}</span>
                            </div>
                            <div className="flex items-start">
                                <span className="font-semibold text-gray-600 w-16">Email:</span>
                                <span className="text-gray-800 flex-1">{data.email || "Not entered yet"}</span>
                            </div>
                            <div className="flex items-start">
                                <span className="font-semibold text-gray-600 w-16">Phone:</span>
                                <span className="text-gray-800 flex-1">{data.phone || "Not entered yet"}</span>
                            </div>
                            <div className="flex items-start">
                                <span className="font-semibold text-gray-600 w-16">Address:</span>
                                <span className="text-gray-800 flex-1">{data.address || "Not entered yet"}</span>
                            </div>
                            <div className="flex items-start">
                                <span className="font-semibold text-gray-600 w-16">Subject:</span>
                                <span className="text-gray-800 flex-1">{data.subject || "Not entered yet"}</span>
                            </div>
                            <div className="flex items-start">
                                <span className="font-semibold text-gray-600 w-16">Message:</span>
                                <span className="text-gray-800 flex-1">{data.content || "Not entered yet"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs