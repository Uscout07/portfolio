import Link from "next/link";
export default function Hero({ themeColor = "#06AA5B" }) {
    const stylizedText = `<h1>Welcome to My Portfolio</h1>
<p>Hello! I'm Udit Pant, a passionate web developer and technology enthusiast based in Delhi, India. 
I specialize in creating dynamic, user-centric web solutions. 
Explore my work and feel free to connect!</p>
`
    return (
        <div  data-aos="fade" data-aos-duration="1000" data-aos-delay="200" data-aos-easing="ease-in-out" id="hero-section" className="w-screen relative max-h-[100vh] bg-transparent overflow-hidden">
            <div className="absolute inset-0 flex justify-center items-center" >
                <img 
                    className="max-md:w-[97vw] w-[40vw] absolute animate-spin z-10" 
                    src="/homePageCircle.png" 
                    alt="" 
                    style={{ animationDuration: '8s' }} 
                />
                <img 
                    className="w-[25vw] relative z-30 max-md:w-[55vw]" 
                    src="/computer.png" 
                    alt="" 
                />
            </div>
            <div className="w-full h-[50vh] md:flex items-center">
                <div className="pl-10 w-[25%] max-md:text-[2vw]  max-md:w-[90vw] ibm-plex-mono-regular text-[1vw] max-md:pt-30">
                    {stylizedText}
                </div>
            </div>
            <div 
                className="relative w-full h-[50vh] z-20 flex flex-col items-center justify-center" 
                style={{ backgroundColor: themeColor }}
            >
                <div className="px-6 py-4 font-bold l text-white max-md:mt-10 mt-24 text-7xl max-md:text-[10vw]">
                    WELCOME TO MY DEVFOLIO
                </div>
                <Link
                    href="#contact-section"
                    className="text-3xl py-3 px-5 bg-white rounded-full animate-pulse hover:animate-none transition-all duration-300 ease-in-out hover:scale-105"
                    style={{ color: themeColor }}
                >
                    GET IN TOUCH
                </Link>
            </div>
        </div>
    )
}
