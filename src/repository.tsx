import type { FC } from "react";
import { GoRepo } from "react-icons/go";

export const Repository: FC<{ title: string }> = (props) => {
  return (
    <a
      href={"https://github.com/" + props.title}
      className="border p-4 rounded-md border-neutral-300 hover:border-neutral-400 bg-white"
      target="_blank"
    >
      <div className="flex items-center gap-2">
        <GoRepo className="text-neutral-600" />
        <div>{props.title}</div>
      </div>
      <div>
        <div></div>
      </div>
    </a>
  );
};
