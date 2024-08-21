
import NavBar from '../../components/Navbar/NavBar'
import Footer from '../../components/Footer';

const AppDevelopment = () => {
    return (
        <div>
            <NavBar />

            <div>
                <img className='max-w-kd  h-[450px] mt-20' src="./mobile-app-develpoment.jpg" alt="" width={"100%"} />

                <p className='font-bold pl-10 my-10 text-5xl text-center'>Our Approach </p>
                <p className="text-md font-medium text-center" >We understand that every app has its own set of challenges and objectives. That's why we follow a comprehensive approach to ensure that your app not only meets but exceeds your expectations.</p>

                <div class="grid grid-cols-3 gap-4 p-8">
                    <div class="w-full h-[300px] bg-red-500 hover:bg-red-200 transition-colors duration-300 flex items-center justify-center">
                        <h2 class="text-white font-bold text-center">Descover And Planing <br /> <br /> <span className='font-normal'>We begin by thoroughly understanding your business goals, target audience, and app requirements.</span></h2>
                    </div>
                    <div class="w-full h-[300px] bg-green-500 hover:bg-green-200 transition-colors duration-300 flex items-center justify-center">
                        <h2 class="text-white font-bold text-center">Design & Prototyping <br /> <br /> <span className='font-normal'> We develop interactive prototypes to give you a firsthand look and feel of your app before the development phase begins.</span></h2>
                    </div>
                    <div class="w-full h-[300px] bg-blue-500 hover:bg-blue-200 transition-colors duration-300 flex items-center justify-center">
                        <h2 class="text-white font-bold text-center">Development And Testing <br /> <br /> <span className='font-normal'>Using cutting-edge technologies and industry best practices, our developers bring your app to life. </span></h2>
                    </div>
                    <div class="w-full h-[300px] bg-pink-500 hover:bg-yellow-200 transition-colors duration-300 flex items-center justify-center">
                        <h2 class="text-white font-bold text-center">Deployement & Support <br /> <br /> <span className='font-normal'> Once your app is ready, we assist with the deployment process to make it available on the App Store, Google Play Store, or any other platforms. </span></h2>
                    </div>
                    <div class="w-full h-[300px] bg-gray-500 hover:bg-yellow-200 transition-colors duration-300 flex items-center justify-center">
                        <h2 class="text-white font-bold text-center"> Native App Development <br /> <br /> <span className='font-normal'> We specialize in building high-performance native apps for iOS and Android platforms using languages like Swift, Objective-C, Java, and Kotlin. Native apps offer seamless performance and access to device-specific features, providing users with a superior experience. </span></h2>
                    </div>
                    <div class="w-full h-[300px] bg-red-500 hover:bg-yellow-200 transition-colors duration-300 flex items-center justify-center">
                        <h2 class="text-white font-bold text-center">Hybrid App Development <br /> <br /> <span className='font-normal'>Our expertise in hybrid app development enables us to create cross-platform apps using frameworks like React Native, Xamarin, and Flutter. Hybrid apps offer cost-effectiveness and faster time-to-market while maintaining native-like performance.</span></h2>
                    </div>
                    <div class="w-full h-[300px] bg-yellow-500 hover:bg-red-200 transition-colors duration-300 flex items-center justify-center">
                        <h2 class="text-white font-bold text-center">Hybrid App Development <br /> <br /> <span className='font-normal'>Our expertise in hybrid app development enables us to create cross-platform apps using frameworks like React Native, Xamarin, and Flutter. Hybrid apps offer cost-effectiveness and faster time-to-market while maintaining native-like performance.</span></h2>
                    </div>
                    <div class="w-full h-[300px] bg-pink-500 hover:bg-yellow-200 transition-colors duration-300 flex items-center justify-center">
                        <h2 class="text-white font-bold text-center">App Modernization & Migration <br /> <br /> <span className='font-normal'>If you have an existing app that needs a refresh or migration to a new platform, we can help. Our team conducts a thorough assessment and implements modernization strategies to enhance your app’s performance, security, and scalability.</span></h2>
                    </div>

                    <div class="w-full h-[300px] bg-green-500 hover:bg-yellow-200 transition-colors duration-300 flex items-center justify-center">
                        <h2 class="text-white font-bold text-center">App Development<br /> <br /> <span className='font-normal'>We are developing the responsible website and Fast And ultra Fast Application Make and Take To you. That's why we follow a comprehensive approach to ensure that your app not only meets but exceeds your expectations.</span></h2>
                    </div>

                </div>

                <div class="flex items-center justify-center min-h-screen bg-blue-800">
                    <div class="bg-white w-11/12 h-[420px] p-6 rounded-tl-[50px] rounded-br-[50px] shadow-md">
                        <h2 class="text-5xl font-bold mb-10 mt-10">Why Pick Us?</h2>
                        <div class="flex">
                            <div class="w-10/2">
                                <ul class="list-disc list-inside mb-4">
                                    <li class="mb-2">Our team comprises seasoned professionals with extensive experience.</li>
                                    <li class="mb-2">We adhere to the highest quality standards and best practices to ensure that your app is reliable, secure, and user-friendly.</li>
                                    <li class="mb-2">We believe in transparent communication and keep you informed at every step of the development process.</li>
                                    <li class="mb-2">We prioritize clear communication to ensure you are updated throughout the project lifecycle.</li>
                                    <li class="mb-2"> Our believe in transparent communication and keep you informed at every step of the development process.</li>

                                </ul>
                            </div>
                            <div class="w-1/2">
                                <ul class="list-disc list-inside">
                                    <li class="mb-2">We are committed to delivering your app on time and within budget, without compromising on quality.</li>
                                    <li class="mb-2">Our relationship doesn't end with the launch of your app. We provide ongoing support and maintenance to ensure its long-term success.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <Footer/>
        </div>
    )
}

export default AppDevelopment
