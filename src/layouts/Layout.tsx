import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

interface Props{
  children: React.ReactNode
}

const Layout = ({children}:Props) => {
  return (
    <div className=" flex flex-col min-h-screen">
      <div className=" bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Header/>
      <Hero/>
      </div>
      <div className=" container mx-auto py-10 flex-1">
        {children}
      </div>
      <Footer/>
    </div>
  );
}

export default Layout;
