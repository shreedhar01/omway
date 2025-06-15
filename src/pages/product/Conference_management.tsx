import React from "react";
import { Services } from "../../components";

const Conference_Management: React.FC = ()=>{
    const titles = ["Overview","Features","Benefits"]
    const contents = [
        {
            Overview : `<div class="col-lg-8">
                                        <p></p><p>At Omway Technologies, we understand the intricate demands of organizing and managing conferences. We're excited to introduce our cutting-edge Conference Management System (CMS), a comprehensive software solution designed to simplify the entire conference lifecycle, from planning and registration to engagement and post-event analysis. Whether you are hosting a small-scale seminar or a large international conference, our CMS empowers you to take control and deliver a seamless event experience.</p>

<p><strong>The Future of Conference Management:</strong></p>

<p>At Omway Technologies, we are committed to staying ahead of the curve in the event management industry. Here's how we envision the future of our Conference Management System:</p>

<ul>
	<li><strong>AI-Powered Insights:</strong> We are working on integrating AI for data-driven insights, allowing you to make informed decisions and continuously improve your event strategies.</li>
	<li><strong>Virtual and Hybrid Events:</strong> Our CMS is evolving to support virtual and hybrid event formats, ensuring you can adapt to changing event landscapes.</li>
	<li><strong>Sustainability Initiatives:</strong> We are exploring ways to help you minimize the environmental impact of your events, from reduced paper usage to carbon footprint tracking.</li>
</ul>

<p>Our Conference Management System is your key to hosting successful, engaging, and hassle-free conferences. Trust Omway Technologies to provide the tools you need to plan, execute, and analyze your events. Contact us to discover how our CMS can elevate your conference management capabilities and create unforgettable attendee experiences.</p><p></p>
                                    </div>`
        },
        {
            Features: `<div id="content10" class="tab-pane fade active show">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <p></p><p><strong>1. Event Planning and Management:</strong></p>

<ul>
	<li>Streamline event planning with customizable templates for agendas, schedules, and speakers.</li>
	<li>Easily manage all event logistics, from venue selection to catering arrangements.</li>
</ul>

<p>&nbsp;</p>

<p><strong>2. Registration and Ticketing:</strong></p>

<ul>
	<li>Create user-friendly registration forms to capture attendee details.</li>
	<li>Set up ticketing options, pricing, and secure payment gateways for easy ticket sales.</li>
</ul>

<p>&nbsp;</p>

<p><strong>3. Attendee Engagement:</strong></p>

<ul>
	<li>Facilitate networking and communication among attendees with chat rooms and discussion boards.</li>
	<li>Enable attendees to build personalized schedules and access event-related materials.</li>
</ul>

<p>&nbsp;</p>

<p><strong>4. Abstract and Paper Submission:</strong></p>

<ul>
	<li>Simplify the submission and review process for conference papers and abstracts.</li>
	<li>Manage peer review and selection efficiently within the system.</li>
</ul>

<p>&nbsp;</p>

<p><strong>5. Financial Management:</strong></p>

<ul>
	<li>Keep track of conference finances, including budgeting and revenue collection.</li>
	<li>Monitor expenses and generate financial reports for transparency.</li>
</ul>

<p>&nbsp;</p>

<p><strong>6. On-Site Check-In:</strong></p>

<ul>
	<li>Accelerate the check-in process with QR code and mobile check-in options.</li>
	<li>Issue badges and materials to attendees swiftly.</li>
</ul>

<p>&nbsp;</p>

<p><strong>7. Event Analytics:</strong></p>

<ul>
	<li>Gather valuable insights through data analytics to evaluate the success of your event.</li>
	<li>Monitor attendee feedback and track key performance metrics.</li>
</ul>

<p>&nbsp;</p>

<p><strong>8. Mobile Access:</strong></p>

<ul>
	<li>Provide attendees with a mobile app for easy access to event information, schedules, and updates.</li>
</ul><p></p>
                                    </div>
                                                                    </div>
                            </div>`
        },
        {
            Benefits : `<div id="content11" class="tab-pane fade active show">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <p></p><ul>
	<li><strong>Customization:</strong> Our CMS is highly customizable to match your unique event requirements, ensuring a tailored solution.</li>
	<li><strong>Ease of Use:</strong> Our user-friendly interface and intuitive features make event management accessible to users of all skill levels.</li>
	<li><strong>Security:</strong> We prioritize data security, implementing robust measures to protect sensitive attendee information and payment transactions.</li>
	<li><strong>Integration:</strong> Seamlessly integrate our CMS with your existing systems or platforms to maximize efficiency and data flow.</li>
	<li><strong>Support and Training:</strong> We offer comprehensive training for your team and provide ongoing support to ensure a smooth event management experience.</li>
</ul><p></p>
                                    </div>
                                                                    </div>
                            </div>`
        }
    ]
    return(
        <div>
            <Services main="Education Management" title={titles} content={contents} thing="Product"/>
        </div>
    )
}

export default Conference_Management