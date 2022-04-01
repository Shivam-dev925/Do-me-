import React, { useState } from "react";
import { Section } from "../../Styles/Section";
import MainContent from "./MainContent";
import NavbarHorizontal from "./Navbar";

function MainAppBody() {
  const [show, setshow] = useState(true);

  const HandleDrawer = () => {
    setshow(!show);

    const Sidebar = document.getElementById("sidebar");
    const ContentBody = document.getElementById("ContentBody");
    if (!show) {
      Sidebar.style.flex = "0";
      Sidebar.style.width = "0px";
      ContentBody.style.flex = "1";
      Sidebar.style.transition = "0.3s linear";
    } else {
      Sidebar.style.flex = "0.3";

      Sidebar.style.transition = "0.3s linear";
    }
  };
  return (
    <Section minHeight="100vh" bg="white">
      <NavbarHorizontal HandleDrawer={HandleDrawer} />

      <MainContent />
    </Section>
  );
}

export default MainAppBody;
