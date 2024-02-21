import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import logo from "../../public/images/home.png";
import { menuList, offerList } from "./menu-items-list";

const Menu: NextPage = () => {
  const { pathname: route } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOfertaMenuOpen, setIsOfertaMenuOpen] = useState(false);

  return (
    <menu
      className={`${
        isOpen ? "fixed max-h-screen" : "sticky max-h-12"
      } transition-max-h top-0 z-50 flex h-screen w-full items-center bg-orange-color pt-12 duration-500 md:max-h-12 md:pt-0 lg:px-[10%]`}
    >
      <Link
        href="/"
        prefetch={false}
        onClick={() => setIsOpen(false)}
        className="absolute left-5 top-2 max-w-[30px] md:relative md:left-0 md:top-0"
      >
        <Image src={logo} alt="menu logo" priority />
      </Link>

      {isOpen ? (
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute right-5 top-2 cursor-pointer text-3xl text-white md:hidden`}
        >
          X
        </div>
      ) : (
        <div
          onClick={() => setIsOpen(true)}
          className="absolute right-5 top-1 cursor-pointer text-4xl font-thin text-white md:hidden"
        >
          ☰
        </div>
      )}

      <nav
        className={`${
          isOpen ? "left-0 opacity-100" : "-left-full opacity-0"
        } relative top-0 h-full w-full flex-row overflow-y-auto border-t-2 border-t-orange-darker-color bg-orange-color pb-32 text-white transition-all duration-1000 md:left-0 md:flex md:h-full md:items-center md:justify-end md:overflow-y-visible md:bg-transparent md:pb-0 md:opacity-100`}
      >
        <Link
          href="https://www.facebook.com/centrumkangurek/"
          prefetch={false}
          onClick={() => setIsOpen(false)}
          target="_blank"
          className="flex h-12 items-center bg-orange-darker-color px-6 hover:bg-orange-lighter-color md:h-full md:bg-transparent"
        >
          <div className="whitespace-nowrap text-lg md:text-base">
            Wydarzenia [FB]
          </div>
        </Link>

        <div
          onMouseEnter={() => setIsOfertaMenuOpen(true)}
          onMouseLeave={() => setIsOfertaMenuOpen(false)}
          className={`items-center md:flex md:h-full md:bg-transparent md:hover:bg-orange-lighter-color`}
        >
          <Link
            href="/#oferta"
            prefetch={false}
            onClick={() => setIsOpen(false)}
            className="flex h-12 items-center whitespace-nowrap px-6 hover:bg-orange-lighter-color"
          >
            <div className="text-lg md:text-base">
              Oferta
              <span className="hidden text-xl md:inline">
                &nbsp;&nbsp;&nbsp;v
              </span>
            </div>
          </Link>
          <div
            className={`${isOfertaMenuOpen ? "md:top-12" : "md:-top-[380px]"} ${
              isOfertaMenuOpen ? "md:opacity-100" : " md:opacity-0"
            } md:absolute md:-z-10 md:h-fit md:flex-col md:border-t md:border-orange-darker-color md:bg-orange-color/95  md:transition-all md:duration-300`}
          >
            {offerList.map((menuItem) => {
              return (
                <Link
                  href={menuItem.pathName}
                  key={menuItem.name}
                  prefetch={false}
                  onClick={() => {
                    setIsOpen(false);
                    setIsOfertaMenuOpen(false);
                  }}
                  className={`${
                    route === menuItem.pathName
                      ? "active-page"
                      : "odd:bg-orange-darker-color md:odd:bg-transparent"
                  } 
                                    flex h-12 items-center overflow-hidden px-6 transition-all duration-300  hover:bg-orange-lighter-color md:hover:bg-orange-lighter-color`}
                >
                  <div className="whitespace-nowrap text-lg md:text-base">
                    {menuItem.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {menuList.map((menuItem) => {
          return (
            <Link
              href={menuItem.pathName}
              key={menuItem.name}
              prefetch={false}
              onClick={() => setIsOpen(false)}
              className={`${
                route === menuItem.pathName
                  ? "active-page"
                  : "even:bg-orange-darker-color md:even:bg-transparent"
              } flex h-12 items-center px-6  hover:bg-orange-lighter-color md:h-full md:hover:bg-orange-lighter-color`}
            >
              <div className="whitespace-nowrap text-lg md:text-base">
                {menuItem.name}
              </div>
            </Link>
          );
        })}
      </nav>
    </menu>
  );
};

export default Menu;
