import React, { useEffect, useState } from "react";
import Nav from "./components/nav";
import Header from "./components/header";
import About from "./components/about";
import Resume from "./components/resume";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";

const App = () => {
  const [siteData, setSiteData] = useState({});

  useEffect(() => {
    fetch("/SiteData.json")
      .then((res) => res.json())
      .then((data) => {
        setSiteData(data);
      });
  }, []);

  return (
    <div className='App'>
      <Nav />
      <Header data={siteData.main} />
      <About data={siteData.main} />
      <Resume data={siteData.resume} />
      <Skills />
      <Contact data={siteData.main}/>
      <Footer data={siteData.main} />
    </div>
  );
};

export default App;