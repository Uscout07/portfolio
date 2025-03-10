import { Icon } from "@iconify/react/dist/iconify.js"

export default function Profile({ themeColor = "#F89245" }) {
  return (
    <div id="profile-section" className="w-screen relative bg-transparent overflow-hidden">
      <div className="h-[50vh] max-md:h-[25vh]"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          className="w-[30%] max-md:w-4/5 absolute animate-spin z-10"
          src="/profileCircle.png"
          alt=""
          style={{ animationDuration: '8s' }}
        />
        <img className="relative z-30 max-md:w-[55vw] w-1/5 rounded-full" src="/photo.png" alt="" />
      </div>
      <div
        className={`
          modileProfileDiv
          relative w-full max-md:h-[30vh] 
          md:min-h-[50vh] z-20 flex flex-col
          items-center justify-center max-md:justify-end
        `}
        style={{ backgroundColor: themeColor }}
      >
        <div className="w-full px-6 py-2 font-bold text-black bg-white md:mt-[30vh] text-center uppercase overflow-hidden max-md:mt-2">
          <div className="relative text-[min(2.75vw)] whitespace-nowrap text-center z-40">
            udit pant - delhi technological university - Bachelor of Technology
          </div>
        </div>
        <div className="flex items-center justify-between w-[95vw] md:mt-8 text-7xl md:mb-8">
          <Icon className="max-md:px-[1vw]" icon="skill-icons:html" />
          <Icon className="max-md:px-[1vw]" icon="skill-icons:css" />
          <Icon className="max-md:px-[1vw]" icon="vscode-icons:file-type-js-official" />
          <Icon className="max-md:px-[1vw]" icon="skill-icons:react-dark" />
          <Icon className="max-md:px-[1vw]" icon="vscode-icons:file-type-light-next" />
          <Icon className="max-md:px-[1vw]" icon="devicon:nodejs" />
          <Icon className="max-md:px-[1vw]" icon="skill-icons:expressjs-dark" />
          <Icon className="max-md:px-[1vw]" icon="logos:postgresql" />
          <Icon className="max-md:px-[1vw]" icon="skill-icons:supabase-dark" />
          <Icon className="max-md:px-[1vw]" icon="logos:python" />
        </div>
      </div>
    </div>
  )
}
