import { FaGithub, FaHtml5, FaJs, FaLinkedin } from "react-icons/fa";
import { Repository } from "./repository";
import { SiReact, SiTailwindcss, SiTypescript, SiCss3 } from "react-icons/si";
import { Website } from "./website";

function App() {
  return (
    <div className="bg-neutral-50 max-h-screen overflow-y-auto">
      <div className="min-h-screen">
        <div className="w-full max-w-3xl p-4 mx-auto mt-4 md:mt-12 space-y-4">
          <div className="bg-neutral-200 p-12 gap-4 rounded-md">
            <div className="h-16 w-16 rounded-full mx-auto overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/profile.svg"
                alt=""
              />
            </div>
            <div className="font-bold text-neutral-700 p-3 text-center">
              Hi, I'm Carline
            </div>
            <p>
              I'm a beginner web developer and these are some of my projects and
              skills.
            </p>
          </div>
          <div className="bg-neutral-100 flex justify-center p-4 gap-4 rounded-md">
            <a
              className="flex border py-2 rounded-md gap-3 items-center px-3 bg-white hover:bg-neutral-200 hover:border-neutral-400 border-neutral-300 text-neutral-700"
              href="https://github.com/carline-sh"
              target="_blank"
            >
              <FaGithub className="text-3xl" />
              <span>Github</span>
            </a>
            <a
              className="flex border py-2 rounded-md gap-3 items-center px-3 bg-white hover:bg-neutral-200 hover:border-neutral-400 border-neutral-300 text-neutral-700"
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
                  color: "border-pink-300 text-pink-800 bg-pink-50",
                },
                {
                  text: "CSS",
                  icon: <SiCss3 />,
                  color: "border-blue-300 text-blue-800 bg-blue-50",
                },
                {
                  text: "JavaScript",
                  icon: <FaJs />,
                  color: "border-yellow-300 text-yellow-800 bg-yellow-50",
                },
                {
                  text: "TypeScript",
                  icon: <SiTypescript />,
                  color: "border-purple-300 text-purple-800 bg-purple-50",
                },
                {
                  text: "React",
                  icon: <SiReact />,
                  color: "border-cyan-300 text-cyan-800 bg-cyan-50",
                },
                {
                  text: "TailwindCSS",
                  icon: <SiTailwindcss />,
                  color: "border-green-300 text-green-800 bg-green-50",
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
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 text-neutral-700">
            {[
              {
                name: "carline-sh/100-days-of-code",
                text: "An overview of my 100 days of code journey. 🗓️",
              },
              {
                name: "carline-sh/catsplainer",
                text: "A website that explains ethereum with cats. 🐱",
              },
              {
                name: "carline-sh/tesla-clone",
                text: "A rebuild of the Tesla model S website. 🚗",
              },
              {
                name: "carline-sh/carline-sh",
                text: "My personal website. 🌐",
              },
            ].map((title) => (
              <Repository title={title.name} text={title.text} />
            ))}
            <Website
              title="hangman"
              url="https://carline-sh.github.io/100-days-of-code/hangman/"
            />
            <Website
              title="100 days of code"
              url="https://carline-sh.github.io/100-days-of-code/"
            />
          </div>
          <footer className="flex justify-center items-center pt-4">
            <div className="text-neutral-700">
              &copy; carline.sh — {new Date().getFullYear()}
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
