import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'; 
import Image from "next/image";
import Link from "next/link";
// import ThemeToggler from "./ThemeToggler";
import menuData from "./MenuData";
import PlayerPoint from "./PlayerPoint";
import UserProfile from "./UserProfile";

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
                      ? "lg:-skew-x-12 lg:bg-[#F4B13E]": ""} ease-in px-4 py-2 group relative ${(!entityToken && ( index === 1) ? 'hidden' : '') } ${((username != process.env.NEXT_PUBLIC_Administrator1 && username != process.env.NEXT_PUBLIC_Administrator2) && index === 1 ? 'hidden' : '')}`}>
                      {
                        <Link
                          href={menuItem.path}
                          className={`ease-linear flex py-2 text-base font-bold lg:mr-0 lg:inline-flex lg:px-0 text-[#F4B13E] hover:text-white ${usePathName === menuItem.path
                            ? "lg:text-[#361802]"
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
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                {
                  entityToken ? (
                    <>
                      <button className="mx-8 align-middle justify-center lg:flex hidden">
                        <Image alt="" src="images/svgs/cart.svg" width={40} height={40}/>
                      </button>
                      <UserProfile />
                      <PlayerPoint username={username} />
                      <Link
                        href="/"
                        className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-[#FA9F4E] text-[#3F2E4E] hover:text-white  px-8 py-3 text-base font-bold transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
                        onClick={() => {
                          sessionStorage.clear();
                          setEntityToken('');
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
