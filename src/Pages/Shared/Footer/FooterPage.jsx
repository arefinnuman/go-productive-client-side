import { Footer } from "flowbite-react";
import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const FooterPage = () => {
  return (
    <>
      <Footer container={true}>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                href="https://i.ibb.co/47P8Qn5/logo.png"
                src="https://i.ibb.co/47P8Qn5/logo.png"
                alt="Logo"
                name="GO Productive"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link to="#">Flowbite</Footer.Link>
                  <Footer.Link to="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link to="#">Github</Footer.Link>
                  <Footer.Link to="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link to="#">Privacy Policy</Footer.Link>
                  <Footer.Link to="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright to="#" by="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon to="#" icon={BsFacebook} />
              <Footer.Icon to="#" icon={BsInstagram} />
              <Footer.Icon to="#" icon={BsTwitter} />
              <Footer.Icon to="#" icon={BsGithub} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default FooterPage;
