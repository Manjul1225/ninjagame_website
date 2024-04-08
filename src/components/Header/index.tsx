'use client'
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'; 
import Image from "next/image";
import Link from "next/link";
// import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import PlayerPoint from "./PlayerPoint";
import UserProfile from "./UserProfile";
import { DataContext } from "@/app/datacontext";

const Header = () => {
  const {token} = useContext(DataContext);
  const usePathName = usePathname();
  let username = null;
  const router = useRouter();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  }, []);

  const handleReturnButton = () => {
    router.push('/');
  };  

  return (
    usePathName !== "/game" ? (
      <header
        className={`w-full border-b-2 border-[#F4B13E] h-[62px] header left-0 z-10 top-0 flex items-center bg-[#3F2E4E] ${sticky
          ? "dark:shadow-sticky-dark fixed z-[9999] !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "absolute"           
          }`}
      >
        <div className="mx-4 w-full">
          <div className="relative flex items-center justify-between">
            <div className="w-60 max-w-full px-2 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full text-[#F4B13E] text-[30px] ${sticky ? "py-5 lg:py-2" : "py-8"
                  } `}
              >
                <Image src="/logo.png" width={240} height={100} alt=""/>
              </Link>
            </div>
            <div className="lg:w-[800px] flex items-center justify-between px-2">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-[#F4B13E] transition-all duration-300 ${navbarOpen ? " top-[7px] rotate-45" : " "
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-[#F4B13E] transition-all duration-300 ${navbarOpen ? "opacity-0 " : " "
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-[#F4B13E] transition-all duration-300 ${navbarOpen ? " top-[-8px] -rotate-45" : " "
                      }`}
                  />  
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                    }`}
                >
                  <ul className="block lg:flex">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className={`${usePathName === menuItem.path
                        ? "lg:-skew-x-[20deg] lg:bg-[#F4B13E]": ""} transition-opacity px-4 py-2 group relative ${(!token && ( index === 1) ? 'hidden' : '') } ${((username != process.env.NEXT_PUBLIC_Administrator1 && username != process.env.NEXT_PUBLIC_Administrator2) && index === 1 ? 'hidden' : '')}`}>
                        {
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base font-bold lg:mr-0 lg:inline-flex lg:px-0 text-[#F4B13E] hover:text-white ${usePathName === menuItem.path
                              ? "lg:text-[#361802] lg:skew-x-[20deg]"
                              : ""
                              }`}
                          >
                            {menuItem.title}
                          </Link>
                        }
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                {
                  token ? (
                    <>
                      <button className="mx-8 align-middle justify-center lg:flex hidden">
                        <Image alt="" src="images/svgs/cart.svg" width={40} height={40}/>
                      </button>
                      <UserProfile />
                      <PlayerPoint username={username}/>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/signin"
                        className="hidden px-4 py-3 text-base text-[#F4B13E] hover:text-white font-bold md:block"
                      >
                        Sign In
                      </Link>
                    </>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </header>
    ) : (
      <button className="fixed top-[20px] left-[70px]" onClick={handleReturnButton}>
        <FontAwesomeIcon icon={faHouse} style={{fontSize: "30px"}}/>
      </button>
    )
  );
};

export default Header;