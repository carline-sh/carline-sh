import type { FC } from "react";
import { CiGlobe } from "react-icons/ci";
import { HiCursorArrowRays } from "react-icons/hi2";

export const Website: FC<{ title: string; url: string }> = (props) => {
  return (
    <a
      href={props.url}
      className="border p-4 rounded-md border-neutral-300 hover:border-neutral-400 bg-white"
      target="_blank"
    >
      <div className="flex items-end gap-2 justify-between">
        <div className="flex items-center gap-2">
          <CiGlobe className="text-neutral-600" />
          <div>{props.title}</div>
        </div>

        <HiCursorArrowRays className=" text-neutral-600 text-xl" />
      </div>
    </a>
  );
};
