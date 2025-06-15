import React from "react";
import { Services } from "../../components";

const ItSolution:React.FC = ()=>{
    const titles = ["Description","Networking","Security","Others"]
    const contents =[
        {
            Description : `<div id="content9" class="tab-pane fade active show">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <p></p><p>At Omway Technologies, we understand that technology is the backbone of modern businesses. That's why we offer a wide range of IT solutions to help you leverage technology for success. Our expert team is dedicated to ensuring that your IT infrastructure is not just operational but optimized to meet your unique business needs.</p>

<p>Leave the IT management to the experts. Our Managed IT Services provide proactive monitoring, maintenance, and support to keep your systems running smoothly. Say goodbye to downtime and IT headaches.</p><p></p>
                                    </div>
                                                                    </div>
                            </div>`
        },
        {
            Networking : `<div id="content10" class="tab-pane fade active show">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <p></p><p><strong>1. Cloud Solutions</strong></p>

<p>Unlock the power of the cloud with our Cloud Solutions. We'll help you migrate to and manage cloud platforms like AWS, Azure, or GCP, providing scalability and cost-efficiency for your operations.</p>

<p>&nbsp;</p>

<p><strong>2. Network Infrastructure</strong></p>

<p>A robust network is crucial for smooth operations. Let us design, set up, and manage your network infrastructure, ensuring reliable connectivity.</p>

<p>&nbsp;</p>

<p><strong>3. Virtualization Services</strong></p>

<p>Maximize server resources and efficiency with our Virtualization Services. We'll help you implement and maintain virtualized environments that reduce costs.</p><p></p>
                                    </div>
                                                                    </div>
                            </div>`
        },
        {
            Security : `<div id="content11" class="tab-pane fade active show">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <p></p><p><strong>1. Cybersecurity Expertise</strong></p>

<p>Protect your business from threats with our top-notch cybersecurity solutions. We employ the latest technologies and best practices to safeguard your data and networks.</p>

<p>&nbsp;</p>

<p><strong>2. Data Backup and Recovery</strong></p>

<p>Don't wait for a data disaster to strike. Our Data Backup and Recovery services ensure that your critical data is safe and recoverable in case of emergencies.</p><p></p>
                                    </div>
                                                                    </div>
                            </div>`
        },
        {
            Others :`<div id="content12" class="tab-pane fade active show">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <p></p><p><strong>1. Custom Software Development</strong></p>

<p>If off-the-shelf software doesn't cut it, we can develop custom solutions tailored to your business. From web and mobile apps to databases, we have your software needs covered.</p>

<p>&nbsp;</p>

<p><strong>2. Unified Communications</strong></p>

<p>Boost your team's collaboration with our Unified Communications solutions. Streamline voice, video, chat, and email communications for better productivity.</p>

<p>&nbsp;</p>

<p><strong>3. IoT Solutions</strong></p>

<p>In the age of IoT, stay connected and data-driven with our IoT Solutions. We provide device management, data analytics, and security for your IoT ecosystem.</p>

<p>&nbsp;</p>

<p><strong>4. ERP Implementation</strong></p>

<p>Streamline your operations with our ERP implementation services. We'll help you choose and customize the right system to optimize your resources.</p><p></p>
                                    </div>
                                                                    </div>
                            </div>  `
        }
    ]
    return (
        <div>
            <Services main="It Solution" title={titles} content={contents}/>
        </div>
    )
}
export default ItSolution