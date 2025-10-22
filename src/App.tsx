import { FaGithub, FaHtml5, FaJs, FaLinkedin } from "react-icons/fa";
import { Repository } from "./repository";
import { SiReact, SiTailwindcss, SiTypescript, SiCss3 } from "react-icons/si";

function App() {
  return (
    <div className="bg-neutral-50 max-h-screen overflow-y-auto">
      <div className="min-h-screen">
        <div className="w-full max-w-xl mx-auto mt-12 space-y-4">
          <div className="bg-neutral-200 p-12 flex items-center gap-4 rounded-md">
            <div className="h-16 w-16 border-neutral-600 border rounded-full">
              <img src="" alt="" />
            </div>
            <div className="font-bold text-neutral-700">Carline</div>
          </div>
          <div className="bg-neutral-100 flex justify-center p-4 gap-4 rounded-md">
            <a
              className="flex border py-2 rounded-md gap-3 items-center px-3 hover:bg-neutral-200 hover:border-neutral-400 border-neutral-300 text-neutral-700"
              href="https://github.com/carline-sh"
              target="_blank"
            >
              <FaGithub className="text-3xl" />
              <span>Github</span>
            </a>
            <a
              className="flex border py-2 rounded-md gap-3 items-center px-3 hover:bg-neutral-200 hover:border-neutral-400 border-neutral-300 text-neutral-700"
              href="https://linkedin.com/in/karlijnkools/"
              target="_blank"
            >
              <FaLinkedin className="text-3xl" />
              <span>Linkedin</span>
            </a>
          </div>
          <div className="rounded-md p-3 bg-neutral-100">
            <div className="font-bold p-3 text-neutral-700">Skills</div>
            <ul className="flex flex-wrap gap-2">
              {[
                {
                  text: "HTML",
                  icon: <FaHtml5 />,
                  color: "border-pink-300 text-pink-800",
                },
                {
                  text: "CSS",
                  icon: <SiCss3 />,
                  color: "border-blue-300 text-blue-800",
                },
                {
                  text: "JavaScript",
                  icon: <FaJs />,
                  color: "border-yellow-300 text-yellow-800",
                },
                {
                  text: "TypeScript",
                  icon: <SiTypescript />,
                  color: "border-purple-300 text-purple-800",
                },
                {
                  text: "React",
                  icon: <SiReact />,
                  color: "border-cyan-300 text-cyan-800",
                },
                {
                  text: "TailwindCSS",
                  icon: <SiTailwindcss />,
                  color: "border-green-300 text-green-800",
                },
              ].map((skill) => (
                <li
                  className={
                    skill.color +
                    " border rounded-md p-2 flex items-center gap-2"
                  }
                >
                  {skill.icon}
                  {skill.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 w-full gap-4 text-neutral-700">
            {[
              "carline-sh/100-days-of-code",
              "carline-sh/catsplainer",
              "carline.sh",
            ].map((title) => (
              <Repository title={title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
