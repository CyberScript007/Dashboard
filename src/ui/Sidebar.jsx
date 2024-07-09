import Logo from "./Logo";

function Sidebar() {
  return (
    <div className="h-screen w-full max-[1200px]:hidden">
      <Logo />
    </div>
  );
}

export default Sidebar;
