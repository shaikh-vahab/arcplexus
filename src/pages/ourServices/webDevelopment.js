import React, { useState } from 'react';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';


const WebDevelopment = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            <NavBar />
            <div>
                <img className='w-full max-w-kd h-auto mt-20' src='./web-development.jpg' alt='Web-Development' />
            </div>

            <div>
                <p className='font-semibold my-8 text-4xl text-center '>
                    <b>Solutions We Provide</b>
                </p>
                <marquee className='bg-slate-100'>

                    <div className='flex flex-col md:flex-row gap-20 mt-10 mb-10'>
                        <div className='flex flex-col items-center'>
                            <p>Wordpress</p>
                            <img src='https://img.icons8.com/?size=100&id=aMLZmDlq6SvC&format=png&color=000000' alt='Wordpress' />
                        </div>
                        <div className='flex flex-col items-center'>
                            <p>CMS Development</p>
                            <img src='https://img.icons8.com/?size=100&id=QxkZ9ErO2J7v&format=png&color=000000' alt='CMS Development' />
                        </div>
                        <div className='flex flex-col items-center'>
                            <p>E-Commerce</p>
                            <img src='https://img.icons8.com/?size=100&id=64897&format=png&color=000000' alt='E-Commerce' />
                        </div>
                        <div className='flex flex-col items-center'>
                            <p>E-mail Template</p>
                            <img src='https://img.icons8.com/?size=100&id=9q7xZ4Q5UqsZ&format=png&color=000000' alt='E-mail Template' />
                        </div>
                        <div className='flex flex-col items-center'>
                            <p>Domain Buying</p>
                            <img src='https://img.icons8.com/?size=100&id=111134&format=png&color=000000' alt='Domain Buying' />
                        </div>
                        <div className='flex flex-col items-center'>
                            <p>Hosting</p>
                            <img src='https://img.icons8.com/?size=100&id=AUTvFPHwj06k&format=png&color=000000' alt='Hosting' />
                        </div>
                    </div>
                </marquee>

                <div>
                    <h2 className='my-2 text-center text-3xl text-blue-900 uppercase font-bold mt-10'>Reasons to Pick Us</h2>
                    <section data-aos="zoom-in-down">

                        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                {/* Repeat this block for each reason */}
                                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-red-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                        <h2 className="font-semibold my-4 text-2xl text-center">Customized Solutions</h2>
                                        <p className="text-md font-medium">
                                            We understand that every business is unique, with its own set of goals, objectives, and challenges. That’s why we take a personalized approach to website development, tailoring our solutions to meet your specific needs and requirements.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                        <h2 className="font-semibold my-4 text-2xl text-center">Creative Design</h2>
                                        <p className="text-md font-medium">
                                            Our talented team of designers is dedicated to creating visually stunning and engaging websites that capture the essence of your brand and resonate with your target audience.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-red-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                        <h2 className="font-semibold my-4 text-2xl text-center">Responsive Development</h2>
                                        <p className="text-md font-medium">
                                            With the majority of internet users accessing websites on mobile devices, having a responsive website is essential. Our websites are built with responsive design principles to ensure that they look and perform flawlessly on all devices and screen sizes.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                        <h2 className="font-semibold my-4 text-2xl text-center">Expertise and Experience</h2>
                                        <p className="text-md font-medium">
                                            With years of experience in the industry, our team of skilled developers brings a wealth of expertise to every project. We have a proven track record of delivering high-quality websites that meet and exceed our clients’ expectations.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-red-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                        <h2 className="font-semibold my-4 text-2xl text-center">Reliable Support</h2>
                                        <p className="text-md font-medium">
                                            Our commitment to our clients doesn’t end with project delivery. We provide ongoing support, maintenance, and optimization services to ensure that your website remains secure, up-to-date, and performing at its best.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                        <h2 className="font-semibold my-4 text-2xl text-center">Transparent Communication</h2>
                                        <p className="text-md font-medium">
                                            We value open communication and transparency throughout the entire website development process. From initial consultation to project delivery, we’ll keep you informed and involved every step of the way.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-red-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                        <h2 className="font-semibold my-4 text-2xl text-center">Innovative Technologies</h2>
                                        <p className="text-md font-medium">
                                            Explore the future with our innovative technologies, including 5G connectivity, IoT solutions, and other cutting-edge advancements that redefine the possibilities of communication.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                    <div className="m-2 text-justify text-sm">
                                        <h2 className="font-semibold my-4 text-2xl text-center">Transparent Communication</h2>
                                        <p className="text-md font-medium">
                                            We value open communication and transparency throughout the entire website development process. From initial consultation to project delivery, we’ll keep you informed and involved every step of the way.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div> <br /> <br />
                        <div className='bg-slate-100'>
                            <h2 className='my-2 ml-10 text-4xl uppercase font-bold mt-10 pt-10'>We Serve Industries</h2> <br />

                            <p className="text-white bg-blue-900 hover:bg-red-800 inline-flex items-center justify-center ml-20 w-80 px-6 py-3 my-4 text-lg shadow-xl rounded-xl">  Finence And Banking </p>

                            <p className="text-white bg-gray-700 hover:bg-red-800 inline-flex items-center justify-center ml-20 w-80 px-6 py-3 my-4 text-lg shadow-xl rounded-xl"> Healthcare </p>

                            <button className="text-white bg-blue-900 hover:bg-red-800 inline-flex items-center justify-center ml-20 w-80 px-6 py-3 my-4 text-lg shadow-xl rounded-xl"> E-Commerce </button>

                            <button className="text-white bg-gray-700 hover:bg-red-800 inline-flex items-center justify-center ml-20 w-80 px-6 py-3 my-4 text-lg shadow-xl rounded-xl">Technology and Software </button>


                            <button className="text-white bg-blue-900 hover:bg-red-800 inline-flex items-center justify-center ml-20 w-80 px-6 py-3 my-4 text-lg shadow-xl rounded-xl"> Education </button>

                            <button className="text-white bg-gray-700 hover:bg-red-800 inline-flex items-center justify-center ml-20 w-80 px-6 py-3 my-4 text-lg shadow-xl rounded-xl"> Agriculture</button>

                            <button className="text-white bg-blue-900 hover:bg-red-800 inline-flex items-center justify-center ml-20 w-80 px-6 py-3 my-4 text-lg shadow-xl rounded-xl"> Real Estate </button>

                            <button className="text-white bg-gray-700 hover:bg-red-800 inline-flex items-center justify-center ml-20 w-80 px-6 py-3 my-4 text-lg shadow-xl rounded-xl"> Manufacturing </button>

                            <button className="text-white bg-blue-900 hover:bg-red-800 inline-flex items-center justify-center ml-20 w-80 px-6 py-3 my-4 text-lg shadow-xl rounded-xl"> Automotive </button>

                            <button className="text-white bg-gray-700 hover:bg-red-800 inline-flex items-center justify-center ml-20 w-80 px-6 py-3 my-4 text-lg shadow-xl rounded-xl"> Energy and Environment </button>

                            <button className="text-white bg-blue-900 hover:bg-red-800 inline-flex items-center justify-center ml-20 w-80 px-6 py-3 my-4 text-lg shadow-xl rounded-xl"> Entertainment & Media </button>

                            <button className="text-white bg-gray-700 hover:bg-red-800 inline-flex items-center justify-center ml-20 w-80 px-6 py-3 my-4 text-lg shadow-xl rounded-xl">Professional Services </button>

                        </div>
                        <h2 className=' ml-10  text-center text-4xl uppercase font-bold mt-10 p-4 pt-5 bg-slate-400'>Frequently ASK WH Question ?</h2>
                        <br /> <br />
                        <div>

                            <div className="space-y-2 max-w-md mx-auto">
                                {/* Accordion Item 1 */}
                                <div className="border border-gray-300 rounded-md">
                                    <button
                                        onClick={() => toggleAccordion(1)}
                                        className="w-full text-left px-4 py-2  bg-gray-200 font-semibold rounded-t-md focus:outline-none"
                                    >
                                        Why do you need web development services?  ▼
                                    </button>
                                    <div
                                        className={`${activeIndex === 1 ? 'max-h-96' : 'max-h-0'
                                            } overflow-hidden transition-max-height duration-300 ease-in-out`}
                                    >
                                        <div className="px-4 py-2 bg-white">
                                            <p>Professional web development services ensure that your website is built to high standards, is visually appealing, user-friendly, and optimized for performance and search engines. A professional team can also provide ongoing support and maintenance to keep your website up-to-date.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Accordion Item 2 */}
                                <div className="border border-gray-300 rounded-md">
                                    <button
                                        onClick={() => toggleAccordion(2)}
                                        className="w-full text-left px-4 py-2 bg-gray-200 font-semibold rounded-t-md focus:outline-none"
                                    >
                                        What technologies do you use for web development? ▼
                                    </button>
                                    <div
                                        className={`${activeIndex === 2 ? 'max-h-96' : 'max-h-0'
                                            } overflow-hidden transition-max-height duration-300 ease-in-out`}
                                    >
                                        <div className="px-4 py-2 bg-white">
                                            <p>We use a variety of technologies depending on the project requirements. This may include HTML, CSS, JavaScript, PHP, Python, Ruby on Rails, and various content management systems (CMS) like WordPress, Joomla, or Drupal.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Accordion Item 3 */}
                                <div className="border border-gray-300 rounded-md">
                                    <button
                                        onClick={() => toggleAccordion(3)}
                                        className="w-full text-left px-4 py-2 bg-gray-200 font-semibold rounded-t-md focus:outline-none"
                                    >
                                        Do you offer mobile-friendly website development? ▼
                                    </button>
                                    <div
                                        className={`${activeIndex === 3 ? 'max-h-96' : 'max-h-0'
                                            } overflow-hidden transition-max-height duration-300 ease-in-out`}
                                    >
                                        <div className="px-4 py-2 bg-white">
                                            <p>Yes, we offer ongoing support and maintenance services to keep your website secure, up-to-date, and running smoothly. This includes software updates, security patches, and regular backups..</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border border-gray-300 rounded-md">
                                    <button
                                        onClick={() => toggleAccordion(3)}
                                        className="w-full text-left px-4 py-2 bg-gray-200 font-semibold rounded-t-md focus:outline-none"
                                    >

                                        How long does it take to develop a website? ▼
                                    </button>
                                    <div
                                        className={`${activeIndex === 3 ? 'max-h-96' : 'max-h-0'
                                            } overflow-hidden transition-max-height duration-300 ease-in-out`}
                                    >
                                        <div className="px-4 py-2 bg-white">
                                            <p>The time to develop a website depends on various factors such as the complexity of the project, the number of features required, and the availability of content. A simple website may take a few weeks, while a more complex one could take several months..</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border border-gray-300 rounded-md">
                                    <button
                                        onClick={() => toggleAccordion(3)}
                                        className="w-full text-left px-4 py-2 bg-gray-200 font-semibold rounded-t-md focus:outline-none"
                                    >

                                        Can you redesign an existing website?  ▼
                                    </button>
                                    <div
                                        className={`${activeIndex === 3 ? 'max-h-96' : 'max-h-0'
                                            } overflow-hidden transition-max-height duration-300 ease-in-out`}
                                    >
                                        <div className="px-4 py-2 bg-white">
                                            <p>Yes, we offer website redesign services to give your existing website a fresh look and improve its functionality and performance..</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border border-gray-300 rounded-md">
                                    <button
                                        onClick={() => toggleAccordion(3)}
                                        className="w-full text-left px-4 py-2 bg-gray-200 font-semibold rounded-t-md focus:outline-none"
                                    >
                                        Do you provide e-commerce solutions?  ▼
                                    </button>
                                    <div
                                        className={`${activeIndex === 3 ? 'max-h-96' : 'max-h-0'
                                            } overflow-hidden transition-max-height duration-300 ease-in-out`}
                                    >
                                        <div className="px-4 py-2 bg-white">
                                            <p>Yes, we specialize in developing e-commerce websites with features such as product listings, shopping carts, secure payment gateways, and inventory management.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>
                </div>
            </div>  <br />


            <Footer />
        </div>
    );
};

export default WebDevelopment;
