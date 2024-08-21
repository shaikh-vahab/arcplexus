import React from 'react'
import NavBar from '../../components/Navbar/NavBar'
import Footer from '../../components/Footer'


function DomainHosting() {
    return (
        <div>
            <NavBar />
            <div className='bg-blue-50'>
                <img src="./Domain.png" alt="" className='mt-20' />



                <div class="min-h-screen flex items-center justify-center ">
                    {/* <!-- Left Side Content --> */}
                    <div class="w-1/3  p-8">
                        <h1 class="text-4xl font-bold mb-4">Your Trusted Hosting Partner Since <span class="text-orange-500">2002</span></h1>
                        <p class="text-lg mb-6">Here’s what our customers say about us</p>
                    </div>

                    {/* <!-- Right Side Carousel --> */}
                    <div class="w-2/4 relative">
                        {/* <!-- Carousel Content --> */}
                        <div class="p-9 bg-blue-800 rounded-lg text-white">
                            <div class="mb-10">
                                <svg class="w-8 h-8 text-orange-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M9 12v8H4v-8H0L7 4l7 8H9zm14 0v8h-5v-8h-4l7-8 7 8h-5z" />
                                </svg>
                            </div>
                            <p class="text-lg mb-9">Super fast Speed up my site & handle a lot of customers at a time, good support, 99.9% uptime, best price. I take hosting service from HostGator India from the last 3 years. A big thumbs up.</p>
                            <div class="flex items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLA994hpL3PMmq0scCuWOu0LGsjef49dyXVg&s" alt="Rajan Panda" class="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <p class="font-bold text-orange-500">Rajan Panda,</p>
                                    <p class="text-sm">CEO, RP Graphics</p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="p-10 bg-blue-800 rounded-lg text-white">
                            <div class="mb-10">
                                <svg class="w-8 h-8 text-orange-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M9 12v8H4v-8H0L7 4l7 8H9zm14 0v8h-5v-8h-4l7-8 7 8h-5z" />
                                </svg>
                            </div>
                            <p class="text-lg mb-9">The hosting service is exceptional—fast load times, 24/7 support, and unbeatable uptime. My website's performance has significantly improved since I switched to HostGator India. .</p>
                            <div class="flex items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxkpd0CkaqbEEpzHuTQSU_-ot1hlOcUl1IS50rMgZUcFvg4iO6jPYUPWYA6a5f4Va4_2c&usqp=CAU" alt="Rajan Panda" class="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <p class="font-bold text-orange-500">Donald R.,</p>
                                    <p class="text-sm">JAMS Mediator And Arbitrator</p>
                                </div>
                            </div>
                        </div> <br />



                        {/* <!-- Carousel Navigation (Bottom Slider Buttons) --> */}

                    </div>
                </div>

                <img src="./Domain1.png" alt="Domain Hoisting....!" />

            </div>

            <Footer />
        </div>
    )
}

export default DomainHosting
