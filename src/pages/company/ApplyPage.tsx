import React, { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";

interface Iform {
    name: string,
    email: string,
    phone: string,
    address: string,
    cv: File,
    content: string
}

const ApplyPage: React.FC = () => {
    const { jobId } = useParams()
    const [role, setRole] = useState("")
    const [description, setDescription] = useState("")
    useEffect(()=>{
        setRole(jobId?.replace(/_/g, " ") || " ")
    },[jobId])
    

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Iform>()

    const submit: SubmitHandler<Iform> = (data) => console.log(data);

    const applicationDetail = [
        {
            title: "Full Stack Developer",
            description: `<div class="row">
                    <div class="col-md-6">
                        <h2><strong>Full Stack Developer</strong></h2>
                        <h6 class="text-danger">Deadline: June 30, 2025</h6>
                        <p></p><p><strong>Summary:</strong></p>

<p>We are seeking a talented and creative <strong>Full Stack&nbsp;Developer </strong>to join our team. The ideal candidate will have a strong portfolio showcasing modern and user-centric designs. You will be responsible for designing intuitive, aesthetically pleasing, and highly functional user interfaces for websites and web applications. Collaborating closely with developers, colleague and supervisor, you will turn ideas and requirements into good digital experiences.</p>

<p>&nbsp;</p>

<p><strong>Key Responsibilities:</strong></p>

<ul>
	<li>Design engaging user interfaces for web and mobile platforms.</li>
	<li>Create wireframes, mockups, prototypes, and UI designs using Figma, Adobe Photoshop, or similar tools.</li>
	<li>Conduct user research, analyze user behavior, and implement feedback to improve UX.</li>
	<li>Develop design systems and maintain design consistency across all platforms.</li>
	<li>Collaborate with developers to ensure designs are implemented accurately and efficiently.</li>
	<li>Optimize existing user interface designs and suggest improvements.</li>
	<li>Stay updated on industry trends, best practices, and emerging technologies.</li>
	<li>Conduct usability testing and gather user feedback for continuous improvement.</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
	<li>Bachelor’s degree a related field (or equivalent experience).</li>
	<li>Proven work experience as a UI/UX Designer or similar role.</li>
	<li>A strong portfolio of design projects and user interfaces.</li>
	<li>Good knowledge of HTML, CSS, JavaScript and responsive design principles.</li>
	<li>Understanding of user-centered design (UCD) principles and usability best practices.</li>
</ul><p></p>
                    </div>
                </div>`
        },
        {
            title: "UI Frontend Developer",
            description: `<div class="row">
                    <div class="col-md-6">
                        <h2><strong>UI/UX Frontend Developer</strong></h2>
                        <h6 class="text-danger">Deadline: June 30, 2025</h6>
                        <p></p><p><strong>Summary:</strong></p>

<p>We are seeking a talented and creative <strong>UI/UX Frontend&nbsp;Developer </strong>to join our team. The ideal candidate will have a strong portfolio showcasing modern and user-centric designs. You will be responsible for designing intuitive, aesthetically pleasing, and highly functional user interfaces for websites and web applications. Collaborating closely with developers, colleague and supervisor, you will turn ideas and requirements into good digital experiences.</p>

<p>&nbsp;</p>

<p><strong>Key Responsibilities:</strong></p>

<ul>
	<li>Design engaging user interfaces for web and mobile platforms.</li>
	<li>Create wireframes, mockups, prototypes, and UI designs using Figma, Adobe Photoshop, or similar tools.</li>
	<li>Conduct user research, analyze user behavior, and implement feedback to improve UX.</li>
	<li>Develop design systems and maintain design consistency across all platforms.</li>
	<li>Collaborate with developers to ensure designs are implemented accurately and efficiently.</li>
	<li>Optimize existing user interface designs and suggest improvements.</li>
	<li>Stay updated on industry trends, best practices, and emerging technologies.</li>
	<li>Conduct usability testing and gather user feedback for continuous improvement.</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
	<li>Bachelor’s degree a related field (or equivalent experience).</li>
	<li>Proven work experience as a UI/UX Designer or similar role.</li>
	<li>A strong portfolio of design projects and user interfaces.</li>
	<li>Good knowledge of HTML, CSS, JavaScript and responsive design principles.</li>
	<li>Understanding of user-centered design (UCD) principles and usability best practices.</li>
</ul><p></p>
                    </div>
                </div>`
        },
        {
            title: "Quality Assurance (QA)",
            description: `<div class="col-md-6">
                        <h2><strong>Quality Assurance (QA)</strong></h2>
                        <h6 class="text-danger">Deadline: July 01, 2025</h6>
                        <p></p><p><strong>Job Title:</strong>&nbsp;Quality Assurance (QA)&nbsp;<br>
<strong>Location:</strong>&nbsp;Kathmandu<br>
<strong>Employment Type:</strong>&nbsp;Full-time</p>

<h3><strong>Job Summary:</strong></h3>

<p>We are seeking a detail-oriented QA to join our team and ensure the quality of our software products. The ideal candidate will work closely with the development team to identify bugs, create test plans, and ensure a good user experience.</p>

<h3><strong>Key Responsibilities:</strong></h3>

<ul>
	<li>Design, develop, and execute test plans and test cases.</li>
	<li>Perform manual and automated testing for various software applications.</li>
	<li>Identify, document, and track software defects using bug-tracking tools.</li>
	<li>Collaborate with cross-functional teams to understand project requirements and resolve issues.</li>
	<li>Participate in requirement reviews, design discussions, and code reviews.</li>
	<li>Ensure quality standards and guidelines throughout the development lifecycle.</li>
</ul>

<h3><strong>Required Skills:</strong></h3>

<ul>
	<li>Strong knowledge of software QA methodologies, tools, and processes.</li>
	<li>Experience with testing tools like JIRA, Postman, or similar.</li>
	<li>Familiarity with programming languages.</li>
	<li>Knowledge of SQL and experience with database testing.</li>
	<li>Excellent analytical and problem-solving skills.</li>
	<li>Strong communication and teamwork abilities.</li>
</ul>

<h3><strong>Preferred Qualifications:</strong></h3>

<ul>
	<li>Bachelor's degree in Computer Science, or a related field.</li>
	<li>Experience with Agile/Scrum methodologies.</li>
	<li>Familiarity with performance and security testing tools.</li>
</ul><p></p>
                    </div>`
        }
    ]

    useEffect(()=>{
        const description = applicationDetail.find(item => item.title === role)?.description || '';
setDescription(description);
    },[role])

    return (
        <div>
            <p className="text-4xl font-bold text-brandColour text-center m-8">Apply Now</p>
            <p className="text-2xl font-medium text-brandColour text-center m-8">{role}</p>
            <div className="flex flex-wrap justify-center items-center md:grid grid-cols-2">
                <div dangerouslySetInnerHTML={{ __html: description }} className="m-16 md:ml-24">
                </div>
                <div className="flex justify-center items-center mb-8">
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
                            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">CV*</label>
                            <input
                                type="file"
                                placeholder="Your CV"
                                {...register("cv", { required: true })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 resize-none h-20"
                            />
                            {errors.cv && <p className="text-red-500 text-sm mt-1">{errors.cv.message}</p>}
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

            </div>

        </div>
    )
}

export default ApplyPage