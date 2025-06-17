import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Projects({ themeColor = "" }) {
    const projects = [
        { name: 'Mttalento - Talent Management Platform', desc: "Mttalento is a sleek, modern website designed for a talent management agency. Built with Next.js, the site leverages server-side rendering (SSR) and static site generation (SSG) to ensure optimal performance and SEO.", img: "./Mttalento.png", icons: ["devicon:typescript", "skill-icons:tailwindcss-dark", "devicon:react", "vscode-icons:file-type-next", "skill-icons:supabase-dark"], link: "https://mttalento.vercel.app/" },
        { name: "Lux Beauty Saloon - Salon Booking Platform", desc: "Lux Beauty Saloon is a modern salon booking platform built with Next.js. It provides a seamless appointment scheduling experience with optimized performance and a sleek UI.", img: "./LuxBeautySaloon.png", icons: ["devicon:typescript", "skill-icons:tailwindcss-dark", "devicon:react", "vscode-icons:file-type-next", "skill-icons:supabase-dark"], link: "https://lux-beauty-saloon.vercel.app/", github: "https://github.com/Uscout07/saloon" },
        { name: 'AROMA: [Backend under Development]', desc: "Aroma is an upcoming fullstack web application designed to showcase a fragrance collection. Built with Next.js for optimized performance and React for dynamic UI interactions, it leverages Tailwind CSS for a sleek, responsive design. Supabase will handle the backend, providing authentication, database management, and file storage.", img: "./aroma.png", icons: ["vscode-icons:file-type-js-official", "skill-icons:tailwindcss-dark", "devicon:react", "vscode-icons:file-type-next", "skill-icons:threejs-dark", "logos:greensock-icon"], link: "https://uscout07.github.io/Aroma_A_Fullstack_project/", github: "https://github.com/Uscout07/Aroma_A_Fullstack_project" },
        { name: 'FutureVolt - Modern Electrical Solutions Website', desc: "FutureVolt is a sleek, modern website designed for an electrical solutions provider. Developed using Next.js, it leverages server-side rendering (SSR) for improved performance and SEO. The UI is built with React and styled using Tailwind CSS to ensure responsiveness across devices.", img: "./futureVolt.png", icons: ["vscode-icons:file-type-js-official", "skill-icons:tailwindcss-dark", "devicon:react", "vscode-icons:file-type-next"], link: "https://uscout07.github.io/FutureVolt/", github: "https://github.com/Uscout07/FutureVolt" },
        { name: 'ChrisRealtor - Real Estate Website', desc: "ChrisRealtor is a modern real estate website designed to highlight property listings, realtor services, and client engagement. Developed with Next.js, the project leverages server-side rendering (SSR) and static site generation (SSG) for fast page loads and improved SEO.", img: "./chrisRealtor.png", icons: ["vscode-icons:file-type-js-official", "skill-icons:tailwindcss-dark", "devicon:react", "vscode-icons:file-type-next"], link: "https://uscout07.github.io/ChrisRealtor/", github: "https://github.com/Uscout07/ChrisRealtor/" },
        { name: 'The Caring Paws - Holistic Dog Care Website', desc: "The Caring Paws is a thoughtfully designed website that reflects the facility’s focus on providing a nurturing, chemical-free environment for dogs. Developed with Next.js, the site combines efficient routing, fast performance, and SEO optimization.", img: "./theCaringPaws.png", icons: ["vscode-icons:file-type-js-official", "skill-icons:tailwindcss-dark", "devicon:react"], link: "https://www.thecaringpaws.com/" }
    ];

    return (
        <div id='projects-section' className='w-screen overflow-hidden'>
            <h1 className='text-center font-bold py-10 uppercase text-[8vh] max-lg:text-[6vh] dark:text-white'>Projects</h1>
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-10 scrollbar-hide">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group snap-center flex flex-col justify-between p-4 rounded-lg min-h-[70%] max-md:min-w-[95%] max-lg:min-w-[50%] lg:min-w-[30%] hover:scale-90  transition-all duration-300 ease-in-out bg-[var(--theme-color)]/70 backdrop-filter backdrop-blur-[15px] "
                    >
                        <div>
                            <img className="group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-[#1a1111] w-full object-cover rounded-lg  transition-all duration-300 ease-in-out " src={project.img} alt={project.name} />
                            <h3 className="text-[3vh] py-2 text-white">{project.name}</h3>
                            <div className="project-card-info flex items-center gap-2 text-white pb-2">
                                {project.github && (
                                    <Link href={project.github}>
                                        <Icon className="group-hover:scale-110 group-hover:shadow-lg group-hover:drop-shadow-xl hover:scale-125 active:scale-90 transition-all duration-300 ease-in-out" icon="ri:github-fill" width="32" height="32" />
                                    </Link>
                                )}
                                {project.link && (
                                    <Link href={project.link}>
                                        <Icon className="group-hover:scale-110 group-hover:shadow-lg group-hover:drop-shadow-xl hover:scale-125 active:scale-90 transition-all duration-300 ease-in-out" icon="tabler:link" width="32" height="32" />
                                    </Link>
                                )}
                            </div>
                            <p className="ibm-plex-mono-regular text-[1.5vh] pb-2 text-white">{project.desc}</p>
                        </div>
                        <div className=" w-[90%] flex flex-wrap items-start py-2 max-md:gap-3 max-lg:gap-6 gap-8 px-2">
                            {project.icons.map((icon, idx) => (
                                <Icon key={idx} icon={icon} className="group-hover:scale-150 group-hover:shadow-lg group-hover:drop-shadow-xl bg-none transition-all duration-300 ease-in-out max-md:text-[1.5rem] max-lg:text-[1.5rem] text-[2rem]" />
                            ))}
                        </div>
                    </div>
                ))}

            </div>
            <div data-aos-anchor-placement="top-center" data-aos-anchor=".project-card-info" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" className="w-full flex items-center justify-center">
                <p className="text-gray-600 dark:text-white animate-pulse text-center ibm-plex-mono text-3xl mx-auto  flex items-end justify-center">Pls Scroll &#10513; </p>
            </div>
        </div>
    );
}
