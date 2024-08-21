import React from 'react';
import kws from '../images/clients/kws.png';
import geps from '../images/clients/geps.png';
import protergia from '../images/clients/protergia.png';
import img1 from '../images/clients/compony1.jpg'
import img2 from '../images/clients/compony2.png'
import img3 from '../images/clients/compony3.png'
import img4 from '../images/clients/compony4.png'
import img5 from '../images/clients/compony5.jpg'



const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Clients</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Some of our clients.</h2>
                </div>

                <div className="p-10 flex-column"  >
                    <div className="grid sm:grid-cols-3 lg:grid-cols-8">

                        <div style={clientImage} className="overflow-hidden flex justify-center transition-all">
                            <img src={kws} alt="client" className="w-34 h-94 object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"  />
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all  duration-300 ease-in-out transform hover:scale-110">
                            <img src={protergia} alt="client" className="w-34 h-94 object-cover rounded-lg"/>
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all duration-300 ease-in-out transform hover:scale-110 ">
                            <img src={geps} alt="client" className="w-34 h-94 object-cover rounded-lg"/>
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all duration-300 ease-in-out transform hover:scale-110  ">
                            <img src={img1} alt="client" className="w-34 h-94 object-cover rounded-lg"/>
                        </div>
                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all  duration-300 ease-in-out transform hover:scale-110">
                            <img src={img2} alt="client" className="w-34 h-94 object-cover rounded-lg"/>
                        </div>
                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all  duration-300 ease-in-out transform hover:scale-110">
                            <img src={img3} alt="client" className="w-34 h-94 object-cover rounded-lg"/>
                        </div>
                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all  duration-300 ease-in-out transform hover:scale-110">
                            <img src={img4} alt="client" className="w-34 h-94 object-cover rounded-lg"/>
                        </div>
                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all  duration-300 ease-in-out transform hover:scale-110">
                            <img src={img5} alt="client" className="w-34 h-94 object-cover rounded-lg"/>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;