import { createRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useSpring, config, animated } from "react-spring";
import Button from "./Button";
import { ReactComponent as ArrowDown } from "../assets/arrow_down.svg";
import "../styles/navbar_transition.scss";
import { useHeight } from "../hooks/useHeight";

interface NavbarProps {
  websiteLogo: string;
  navbarLinks?: NavbarItem[];
  accountData?: any;
  pageTitleMap?: Map<string, string>;
}

/**
 * @param {NavbarProps} props
 * @param {string} props.websiteLogo - Website logo to be displayed on the left side of the navbar
 * @param {NavbarItem[] | undefined} props.navbarLinks - NavbarItem array of links to be shown in the navbar
 * @param {any | undefined} props.accountData - Value used to determine Log in/Log out state of button in navbar
 * @param {Map<string, string> | undefined} props.pageTitleMap - Map of pathname to page title for displaying page title on mobile layout of navbar
 * @returns {JSX.Element}
 */
function Navbar(props: NavbarProps) {
  const { websiteLogo, navbarLinks, accountData, pageTitleMap } = props;
  const [subMenuActive, handleSubMenuActive] = useState(-1);
  const [showMobileNavbar, handleShowMobileNavbar] = useState(false);
  const location = useLocation();

  const [heightRef, height] = useHeight();
  const slideInStyles = useSpring({
    config: { ...config.default },
    from: { height: 0 },
    to: {
      height: showMobileNavbar ? height : 0
    }
  });

  useEffect(() => {
    let eventListener: any = null;
    if (subMenuActive >= 0) {
      // @ts-ignore
      eventListener = hideMenu.bind(this);
      document.addEventListener("click", eventListener);
    }

    return () => {
      if (eventListener) {
        document.removeEventListener("click", eventListener);
      }
    };
  }, [subMenuActive]);

  const hideMenu = (event?: React.ChangeEvent<HTMLInputElement>) => {
    if (event) {
      const navbarComponents = document.getElementsByClassName("navbar-component");
      for (let i = 0; i < navbarComponents.length; i++) {
        if (navbarComponents[i].contains(event.target)) {
          return;
        }
      }
    }
    console.log("Hide menu called");
    handleSubMenuActive(-1);
  };

  const mobilelinks = (
    <>
      <div className="z-40 flex-1 flex flex-col w-full">
        <div className="w-full lg:ml-0 flex flex-col ">
          <div className="w-full block ">
            <div className={`bg-gray-bg-dark w-full`}>
              <animated.div style={{ ...slideInStyles, overflow: "hidden" }}>
                <div
                  ref={heightRef}
                  id="dropdown"
                  role="navigation"
                  className="flex flex-col w-full pb-2 bg-gray-bg-dark h-auto content-menu"
                >
                  <div className="ml-auto" />
                  {navbarLinks && navbarLinks.length > 0
                    ? navbarLinks.map((item: NavbarItem, idx) => {
                        const itemRef: any = createRef();
                        return (
                          <div
                            key={`nav-link-${idx}`}
                            className={`navbar-component text-white my-auto cursor-pointer`}
                            onClick={(e: any) => {
                              if (subMenuActive === idx) {
                                handleSubMenuActive(-1);
                              } else {
                                handleSubMenuActive(idx);
                              }
                              if (!item.children?.length) {
                                handleShowMobileNavbar(false);
                              }
                              item.onClick && item.onClick(e);
                            }}
                          >
                            <div className="flex my-auto p-4 hover:bg-gray-600">
                              <div className="my-auto">{item.text}</div>
                              {item.children && item.children.length > 0 ? (
                                <ArrowDown
                                  className={`my-auto transition duration-100 ml-2 inline-block fill-white fill-current ${
                                    subMenuActive === idx ? "-rotate-180" : "rotate-0"
                                  }`}
                                />
                              ) : null}
                            </div>
                            <CSSTransition
                              in={item.children && item.children.length > 0 && subMenuActive === idx}
                              timeout={{ enter: 300, exit: 300 }}
                              classNames="navbaritem"
                              unmountOnExit
                              appear
                              exit={true}
                              nodeRef={itemRef}
                              className="navbaritem select-none overflow-hidden"
                            >
                              <div ref={itemRef}>
                                {item.children?.map((child, child_idx) => (
                                  <div
                                    key={`nav-link-${idx}-child-${child_idx}`}
                                    className={`text-white my-auto cursor-pointer p-4 pl-8 hover:bg-gray-600`}
                                    onClick={(e: any) => {
                                      e.stopPropagation();
                                      handleSubMenuActive(-1);
                                      handleShowMobileNavbar(false);
                                      child.onClick && child.onClick(e);
                                    }}
                                  >
                                    {child.text}
                                  </div>
                                ))}
                              </div>
                            </CSSTransition>
                          </div>
                        );
                      })
                    : null}
                </div>
              </animated.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const links = (
    <>
      <div className="z-40 flex-1 flex flex-col lg:flex-row w-full">
        <div className="w-full -ml-6 lg:ml-0 flex flex-col lg:flex-row">
          <div className="w-full block lg:flex">
            <div className={`lg:my-auto bg-gray-bg-dark w-full`}>
              <div className="hidden lg:block">
                <div
                  id="dropdown"
                  role="navigation"
                  className="flex flex-col lg:flex-row w-full lg:w-auto pb-2 lg:pb-0 lg:px-0 lg:relative absolute bg-gray-bg-dark h-auto content-menu lg:h-10"
                >
                  <div className="ml-auto" />
                  {navbarLinks && navbarLinks.length > 0
                    ? navbarLinks.map((item: NavbarItem, idx) => {
                        const itemRef: any = createRef();
                        return (
                          <div
                            key={`nav-link-${idx}`}
                            className={`navbar-component text-white${
                              idx === navbarLinks.length - 1 ? " " : " mr-8 "
                            }my-auto cursor-pointer`}
                            onClick={(e: any) => {
                              if (subMenuActive === idx) {
                                handleSubMenuActive(-1);
                              } else {
                                handleSubMenuActive(idx);
                              }
                              item.onClick && item.onClick(e);
                            }}
                          >
                            <div className="flex my-auto">
                              {item.text}
                              {item.children && item.children.length > 0 ? (
                                <ArrowDown
                                  className={`my-auto transition duration-100 ml-2 inline-block fill-white fill-current ${
                                    subMenuActive === idx ? "-rotate-180" : "rotate-0"
                                  }`}
                                />
                              ) : null}
                            </div>
                            <div className="h-0 w-0 flex">
                              <div className="relative flex-shrink-0 mt-2">
                                <CSSTransition
                                  in={item.children && item.children.length > 0 && subMenuActive === idx}
                                  timeout={{ enter: 300, exit: 300 }}
                                  classNames="navbaritem"
                                  unmountOnExit
                                  appear
                                  exit={true}
                                  nodeRef={itemRef}
                                  className="navbar-component navbaritem select-none bg-gray-600 border border-gray-400 rounded-md overflow-hidden"
                                >
                                  <div ref={itemRef}>
                                    {item.children?.map((child, child_idx) => (
                                      <div
                                        key={`nav-link-${idx}-child-${child_idx}`}
                                        className={`text-white my-auto cursor-pointer px-4 py-2 hover:bg-gray-400`}
                                        onClick={(e: any) => {
                                          child.onClick && child.onClick(e);
                                        }}
                                      >
                                        {child.text}
                                      </div>
                                    ))}
                                  </div>
                                </CSSTransition>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const getPageName = (): string => {
    const pathname = location.pathname;
    if (pageTitleMap && pageTitleMap.has(pathname)) {
      const pageName = pageTitleMap.get(pathname);
      return pageName ? pageName : "";
    }

    return "";
  };

  return (
    <>
      <div className={`z-40 w-full absolute font-nexa`}>
        <nav className={`select-none bg-gray-bg-dark w-full`}>
          <div id="nav" className={`max-w-7xl mx-auto w-full flex flex-col lg:flex-row bg-gray-bg-dark`}>
            <div className="w-full py-2 flex flex-row lg:flex-row px-6 lg:px-8">
              {/* Website Logo */}
              <Link className="flex-shrink-0 lg:block hidden" to="/">
                <img
                  className="h-10 lg:relative lg:h-16 my-auto z-40 select-none"
                  src={websiteLogo}
                  alt="MAD"
                  onDragStart={(e) => e.preventDefault()}
                />
              </Link>

              {/* Links */}
              <div className="block lg:hidden mr-auto">
                <div
                  className={`block lg:hidden my-auto bg-transparent mr-2 flex flex-row cursor-pointer`}
                  onClick={() => {
                    handleShowMobileNavbar(!showMobileNavbar);
                  }}
                >
                  <img src={websiteLogo} className={`select-none h-10 w-10 sm:h-10 sm:w-10`} alt="MAD" />
                  <div
                    className={`my-auto text-white ml-4 ${
                      accountData ? "block" : `hidden ${getPageName() === "" ? "xs:hidden" : "xs:block"}`
                    }`}
                  >
                    {getPageName()}
                  </div>
                  <ArrowDown
                    className={`fill-white my-auto ml-2 transform duration-100 ${
                      showMobileNavbar ? "-rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </div>
              <div className="hidden lg:block flex ml-auto my-auto">{links}</div>

              {/* Account Menu */}
              <div className="text-white my-auto lg:pl-6 cursor-pointer xl:ml-8 flex-shrink-0 my-auto">
                <Button
                  onClick={() => {}}
                  text={<div className="text-center font-bold leading-none ">{accountData ? "Log out" : "Log in"}</div>}
                  className="text-gray-bg-dark bg-yellow-300 hover:bg-yellow-200 rounded-full w-full px-6 py-3"
                />
              </div>
            </div>

            {/* Mobile links */}
            <div className="block lg:hidden">{mobilelinks}</div>
            <div
              className={`top-0 left-0 -z-10 opacity-50 w-screen h-screen bg-gray-600 ${
                showMobileNavbar ? "fixed lg:hidden" : "hidden"
              }`}
              onClick={() => handleShowMobileNavbar(false)}
            />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
