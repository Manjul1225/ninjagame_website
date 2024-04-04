import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'; 
import Image from "next/image";
import Link from "next/link";
// import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import PlayerPoint from "./PlayerPoint";

const Header = () => {
  const usePathName = usePathname();
  let username = '';

  if (typeof window !== 'undefined') {
    username = sessionStorage.getItem('user_name');
  }

  const router = useRouter();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [entityToken, setEntityToken] = useState('');
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

    const token = sessionStorage.getItem('entity_token')
    if (token)
      setEntityToken(token)
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const handleReturnButton = () => {
    router.push('/');
  };  

  return (
    usePathName !== "/game" ? (
      <header
        className={`w-full h-[62px] header left-0 top-0 flex items-center bg-[#3F2E4E] ${sticky
          ? "dark:shadow-sticky-dark fixed z-[9999] !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "absolute"           
          }`}
      >
        <div className="mx-4 w-full">
          <div className="relative flex items-center justify-between">
            <div className="w-60 max-w-full px-2 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full text-[#F4B13E] font-bold ${sticky ? "py-5 lg:py-2" : "py-8"
                  } `}
              >
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={80}
                  height={30}
                  className="w-28 h-8"
                />
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
                        ? "-skew-x-12 bg-[#F4B13E]": ""} ease-in px-4 py-2 group relative ${(!entityToken && ( index === 1 || index === 2) ? 'hidden' : '') && ((username != process.env.NEXT_PUBLIC_Administrator1 && username != process.env.NEXT_PUBLIC_Administrator2) && index === 1 ? 'hidden' : '')}`}>
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`ease-linear flex py-2 text-base font-bold lg:mr-0 lg:inline-flex lg:px-0 ${usePathName === menuItem.path
                              ? "text-[#361802]"
                              : "text-[#F4B13E] hover:text-white"
                              }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"
                                }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                {
                  entityToken ? (
                    <>
                      <PlayerPoint username={username} />
                      <Link
                        href="/"
                        className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-[#FA9F4E] text-[#3F2E4E] hover:text-white  px-8 py-3 text-base font-bold transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
                        onClick={() => {
                          sessionStorage.clear();
                          setEntityToken('');
                          alert("You have been successfully logged out")
                          router.push('/home');
                        }}
                      >
                        Logout
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/signin"
                        className="hidden px-4 py-3 text-base text-[#F4B13E] hover:text-white font-bold md:block"
                      >
                        Sign In
                      </Link>
                      <Link
                        href="/signup"
                        className="hidden md:block rounded-lg bg-[#FA9F4E] font-bold px-4 py-3 text-base text-[#3F2E4E] hover:text-white transition duration-300 hover:bg-opacity-90"
                      >
                        Register
                      </Link>
                    </>
                  )
                }
                <div>
                  {/* <ThemeToggler /> */}
                </div>
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
