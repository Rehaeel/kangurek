import { useRouter } from "next/router";
import { FC } from "react";
import { Props } from "./types";

const Button: FC<Props> = ({ children, href, onClick }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        if (onClick) onClick();
        router.push(href);
      }}
      className="group relative flex rounded-xl bg-orange-color py-4 px-6 pr-6 text-lg text-white transition-all duration-500 last:hover:pr-12 md:text-2xl"
    >
      {children}
      <p className="absolute right-4 top-3 text-4xl opacity-0 transition-all duration-500 group-hover:opacity-100">
        {">"}
      </p>
    </button>
  );
};

export default Button;
