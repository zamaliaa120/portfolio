import { Button } from "@nextui-org/react";

export default function Aside() {
  return (
    <aside className="p-5 flex flex-col items-center justify-center w-1/5 h-screen">
      <div className="bg-gray rounded-3xl p-5 h-screen w-full flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-5 border-b-1 border-[#8B8sB8B] pb-7 w-full">
          <img src="/vite.png" alt="profile" className="w-[150px] h-[150px]" />
          <h1 className="text-2xl text-white text-center">Zahara Amalia</h1>
          <Button size="sm" color="default">
            Web Developer
          </Button>
        </div>
      </div>
    </aside>
  );
}
