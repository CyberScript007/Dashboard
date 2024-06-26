import styled from "styled-components";

const SidebarStyle = styled.aside`
  height: 100vh;
  overflow: auto;
  background-color: orangered;
`;

function Sidebar() {
  return <SidebarStyle className="bg-white">Hello Sidebar style</SidebarStyle>;
}

export default Sidebar;
