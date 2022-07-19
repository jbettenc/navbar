import logo from "./assets/logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { HashRouter as Router } from "react-router-dom";

function App() {
  document.body.classList.add("bg-gray-bg-dark");
  document.body.classList.add("body-overflow");

  const navbarLinks = [
    {
      text: "Link 1",
      onClick: (e: any) => {
        if (e) {
          console.log("Link 1 Pressed");
        }
      }
    },
    {
      text: "Link 2",
      onClick: (e: any) => {
        if (e) {
          console.log("Link 2 Pressed");
        }
      },
      children: [
        {
          text: "Child 1",
          onClick: (e: any) => {
            if (e) {
              console.log("Child 1 Pressed");
            }
          }
        },
        {
          text: "Child 2",
          onClick: (e: any) => {
            if (e) {
              console.log("Child 2 Pressed");
            }
          }
        }
      ]
    },
    {
      text: "Link 3",
      onClick: (e: any) => {
        if (e) {
          console.log("Link 3 Pressed");
        }
      },
      children: [
        {
          text: "Child 1",
          onClick: (e: any) => {
            if (e) {
              console.log("Child 1 Pressed");
            }
          }
        },
        {
          text: "Child 2",
          onClick: (e: any) => {
            if (e) {
              console.log("Child 2 Pressed");
            }
          }
        }
      ]
    }
  ];

  return (
    <>
      <Router>
        <Navbar websiteLogo={logo} navbarLinks={navbarLinks} />
        <HomePage />
      </Router>
    </>
  );
}

export default App;
