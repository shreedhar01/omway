import React from "react";
import { Services } from "../../components";

const WebSolution:React.FC = ()=>{
    const titles = ["Description","Development","Hosting","SEO"]
    const contents = [
        {
            Description : `<div id="content5" class="tab-pane fade active show">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <p></p><p><strong>Empowering Your Online Success with Comprehensive Web Solutions</strong></p>

<p>In today's digital age, a robust online presence is non-negotiable for businesses of all sizes. Your website serves as your virtual storefront, offering a crucial first impression to potential customers and clients. To ensure your online presence is not just effective but also exceptional, you need a comprehensive web solution. That's where we come in.</p>

<p>At Omway Technologies, we offer a complete web solution designed to take your online presence to the next level. From web design and development to hosting, maintenance, and digital marketing, we are your one-stop destination for all things web-related.</p><p></p>
                                    </div>
                                                                    </div>
                            </div>`
        },
        {
            Development : `<div id="content6" class="tab-pane fade active show">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <p></p><ol>
	<li><strong>Web Design &amp; Development:</strong> Our team of expert designers and developers collaborate to create websites that blend stunning aesthetics with exceptional functionality. We believe that your website should be an extension of your brand, and we work closely with you to ensure it not only looks great but also aligns perfectly with your business goals.</li>
	<li><strong>E-Commerce Solutions:</strong> In the era of online shopping, we offer e-commerce solutions that are tailored to your business. We ensure secure transactions, easy inventory management, and an intuitive user experience to boost your online sales.</li>
	<li><strong>Mobile Responsiveness:</strong> With the majority of internet traffic coming from mobile devices, having a responsive website is critical. We design websites that adapt seamlessly to all screen sizes, ensuring a great user experience across devices.</li>
</ol><p></p>
                                    </div>
                                                                    </div>
                            </div>`
        },
        {
            Hosting : "Your website's performance and security are paramount. Our hosting services guarantee 99.9% uptime, while our maintenance ensures your website remains up-to-date, safe from threats, and running smoothly."
        },
        {
            SEO : `<div id="content8" class="tab-pane fade active show">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <p></p><ol>
	<li><strong>Search Engine Optimization (SEO):</strong> To enhance your website's visibility on search engines, we offer a comprehensive SEO strategy. We optimize your website to rank higher, attracting organic traffic and potential customers.</li>
	<li><strong>Digital Marketing:</strong> Building a great website is only half the battle. Our digital marketing services, including social media marketing, content marketing, and pay-per-click advertising, are designed to boost your online reach, engage your audience, and drive conversions.</li>
</ol><p></p>
                                    </div>
                                                                    </div>
                            </div>`
        }
    ]

    return (
        <div>
            <Services main="Web Solution" title={titles} content={contents}/>
        </div>
    )
}
export default WebSolution