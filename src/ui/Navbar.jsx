function Navbar({ children }) {
  return (
    <ul className="flex  flex-col gap-y-1 overflow-hidden overflow-y-auto">
      {children}
    </ul>
  );
}

export default Navbar;
