import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Button from "./Button";
import { ReactComponent as ArrowDown } from "../assets/arrow_down.svg";
import "../styles/navbar_transition.scss";

interface NavbarProps {
  websiteLogo: string;
  navbarLinks?: NavbarItem[];
  accountData?: any;
}

function Navbar(props: NavbarProps) {
  const { websiteLogo, navbarLinks, accountData } = props;
  const [subMenuActive, handleSubMenuActive] = useState(-1);

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
                            className={`text-white${
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
                                  className={`my-auto transform duration-100 ml-2 inline-block fill-white fill-current ${
                                    subMenuActive === idx ? "-rotate-180" : "rotate-0"
                                  }`}
                                />
                              ) : null}
                            </div>
                            <div className="h-0 w-0 flex">
                              <div className="relative flex-shrink-0 mt-2">
                                <CSSTransition
                                  in={item.children && item.children.length > 0 && subMenuActive === idx}
                                  timeout={{ enter: 400, exit: 200 }}
                                  classNames="navbaritem"
                                  unmountOnExit
                                  appear
                                  exit={true}
                                  nodeRef={itemRef}
                                  className="navbaritem select-none bg-gray-600 border border-gray-400 rounded-md overflow-hidden"
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

  return (
    <>
      <div className={`z-40 w-full absolute font-nexa`}>
        <nav className={`select-none bg-gray-bg-dark w-full`}>
          <div id="nav" className={`w-full flex flex-col lg:flex-row bg-gray-bg-dark`}>
            <div className="max-w-7xl w-full py-2 flex flex-col lg:flex-row mx-auto px-6 lg:px-8">
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
              {links}

              {/* Account Menu */}
              <div className="hidden lg:block text-white my-auto lg:pl-6 cursor-pointer xl:ml-8">
                <Button
                  onClick={() => {}}
                  text={<div className="text-center font-bold leading-none ">{accountData ? "Log out" : "Log in"}</div>}
                  borderColor="none"
                  className="text-gray-bg-dark bg-yellow-300 hover:bg-yellow-200 rounded-full w-full px-6 py-3"
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
