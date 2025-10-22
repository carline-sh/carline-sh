import { FaGithub } from "react-icons/fa";
import { Repository } from "./repository";

function App() {
  return (
    <div className="min-h-screen">
      <div className="w-full max-w-xl mx-auto mt-12 space-y-4">
        <div className="bg-blue-200 p-12 flex items-center gap-4 rounded-md">
          <div className="h-16 w-16 border rounded-full">
            <img src="" alt="" />
          </div>
          <div className="font-bold">Carline</div>
        </div>
        <div className="bg-blue-100 flex justify-center p-4 gap-4 rounded-md">
          <a
            className="flex border py-2 rounded-md gap-3 items-center px-3 hover:bg-blue-200 hover:border-blue-400 border-gray-400"
            href="https://github.com/carline-sh"
            target="_blank"
          >
            <FaGithub className="text-4xl" />
            <span>Github</span>
          </a>
          <a
            className="flex border py-2 rounded-md gap-3 items-center px-3 hover:bg-blue-200 hover:border-blue-400 border-gray-400"
            href="https://github.com/carline-sh"
            target="_blank"
          >
            <FaGithub className="text-4xl" />
            <span>Github</span>
          </a>
        </div>
        <div className="grid grid-cols-2 w-full gap-4">
          <Repository title="carline-sh/100-days-of-code" />
          <Repository title="carline-sh/catsplainer" />
        </div>
      </div>
    </div>
  );
}

export default App;
