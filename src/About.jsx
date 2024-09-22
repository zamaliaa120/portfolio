import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <>
      {/* <main className="flex flex-col gap-10"> */}
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold ">About Me</h1>
        <p className="font-light">
          Experienced Frontend Developer with{" "}
          <span className="text-lightPurple font-bold">2 years</span> of
          experience, specializing in responsive and dynamic web application
          development. Proficient in{" "}
          <span className="text-lightPurple font-bold">
            React, React Native, Vue.js, Nuxt.js, Pinia, Vuex, Express.js,
            Next.js, and Tailwind CSS
          </span>{" "}
          for creating engaging and high-performance user interfaces. Skilled in
          integrating APIs to extend application functionality, with a strong
          commitment to maintaining high coding standards and delivering a
          user-centric development experience.
        </p>
      </div>
      <div>
        <h1 className="text-2xl mb-5">What I'm doing</h1>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex items-start gap-5 p-5 rounded-lg bg-[#212121] shadow-[12px_12px_24px_#1c1c1c,-12px_-12px_24px_#262626]">
            <FontAwesomeIcon
              className="text-lightPurple mt-1"
              icon="fa-solid fa-laptop-code"
              size="2x"
            />
            <div className="flex flex-col gap-2">
              <h1>Web Development</h1>
              <p className="text-sm font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5 p-5 rounded-lg bg-[#212121] shadow-[12px_12px_24px_#1c1c1c,-12px_-12px_24px_#262626]">
            <FontAwesomeIcon
              className="text-lightPurple"
              icon="fa-solid fa-mobile-screen"
              size="2x"
            />
            <div className="flex flex-col gap-2">
              <h1>Mobile Apps</h1>
              <p className="text-sm font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5 p-5 rounded-lg bg-[#212121] shadow-[12px_12px_24px_#1c1c1c,-12px_-12px_24px_#262626]">
            <FontAwesomeIcon
              className="text-lightPurple mt-1"
              icon="fa-solid fa-laptop-code"
              size="2x"
            />
            <div className="flex flex-col gap-2">
              <h1>Web Development</h1>
              <p className="text-sm font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5 p-5 rounded-lg bg-[#212121] shadow-[12px_12px_24px_#1c1c1c,-12px_-12px_24px_#262626]">
            <FontAwesomeIcon
              className="text-lightPurple"
              icon="fa-solid fa-mobile-screen"
              size="2x"
            />
            <div className="flex flex-col gap-2">
              <h1>Mobile Apps</h1>
              <p className="text-sm font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </main> */}
    </>
  );
}
