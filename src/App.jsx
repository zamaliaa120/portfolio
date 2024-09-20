import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import About from "./About";
import Aside from "./components/Aside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-1">
          <Aside />
        </div>
        <div className="col-span-3">
          {/* <About /> */}
          <div className="py-10 pr-10 flex flex-col items-center justify-center h-screen">
            <div className="relative bg-gray rounded-3xl p-5 h-screen w-full">
              <Tabs
                variant="light"
                aria-label="Options"
                className="absolute top-0 right-0 p-5"
                classNames={{
                  cursor: "w-full bg-lightPurple text-white",
                  tabContent: "group-data-[selected=true]:text-[#FFFF]",
                }}
              >
                <Tab key="about" title="About">
                  <About />
                </Tab>
                <Tab key="resume" title="Resume">
                  <h1>Resume</h1>
                </Tab>
                <Tab key="portfolio" title="Portfolio">
                  <h1>Portfolio</h1>
                </Tab>
                <Tab key="contact" title="Contact">
                  <h1>Contact</h1>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
