import { HiChevronLeft } from "react-icons/hi";

function LogoIcon() {
  return (
    <div className="absolute -right-4 top-7 z-[1000] flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
      <div className="flex h-[1.4rem] w-[1.4rem] cursor-pointer items-center justify-center rounded-full bg-indigo-600">
        <HiChevronLeft className="text-3xl text-gray-50" />
      </div>
    </div>
  );
}

export default LogoIcon;
