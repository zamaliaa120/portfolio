import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Link } from "@nextui-org/react";

export default function Aside() {
  return (
    <aside className="py-10 pl-10 flex flex-col items-center justify-center h-screen">
      <div className="bg-gray rounded-3xl p-5 h-screen w-full flex flex-col justify-center gap-10">
        <div className="flex flex-col justify-center items-center gap-5 border-b-1 border-[#8B8sB8B] pb-7 w-full">
          <div className="p-2 bg-lightGray rounded-3xl">
            <img src="/pp.svg" alt="profile" className="w-[120px] h-[120px]" />
          </div>
          <h1 className="uppercase text-2xl textEmail-center">Zahara Amalia</h1>
          <Button size="sm" color="default">
            Web Developer
          </Button>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              icon="fa-regular fa-envelope"
              className="text-lightPurple p-4 rounded-lg bg-[#212121] shadow-[12px_12px_24px_#1c1c1c,-12px_-12px_24px_#262626]"
            />
            <div className="flex flex-col">
              <h1 className="uppercase text-xs">Email</h1>
              <span className="text-xs">Zaharaa120@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              icon="fa-solid fa-mobile-screen"
              className="text-lightPurple p-4 rounded-lg bg-[#212121] shadow-[12px_12px_24px_#1c1c1c,-12px_-12px_24px_#262626]"
            />
            <div className="flex flex-col">
              <h1 className="uppercase text-xs">Phone</h1>
              <span className="text-xs">+6281314193345</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon
              icon="fa-solid fa-location-dot"
              className="text-lightPurple p-4 rounded-lg bg-[#212121] shadow-[12px_12px_24px_#1c1c1c,-12px_-12px_24px_#262626]"
            />
            <div className="flex flex-col">
              <h1 className="uppercase text-xs">Location</h1>
              <span className="text-xs">Indonesia, Jakarta</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Button
            as={Link}
            href="https://www.linkedin.com/in/zahara-amalia"
            isIconOnly
            color="default"
            className="bg-transparent text-white"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" size="lg" />
          </Button>
          <Button
            as={Link}
            href="https://github.com/zahara120/"
            isIconOnly
            color="default"
            className="bg-transparent text-white"
          >
            <FontAwesomeIcon icon="fa-brands fa-square-github" size="lg" />
          </Button>
        </div>
      </div>
    </aside>
  );
}
