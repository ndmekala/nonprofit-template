import * as React from "react";

const Footer = (props) => {

  return (
    <footer className="bg-purple-400 w-full py-4 flex justify-center">
        <div className="w-full max-w-4xl px-8 flex items-center justify-between">
            <div className="text-white">
                <p>Zion Baptist Church</p>
                <p>621 Elwood Ave N Minneapolis, MN 55411</p>
                <p>612-377-5436</p>
            </div>
            <div>
                <a className="text-white hover:text-purple-200" href="https://facebook.com">
                    <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"/></svg>
                    <span className="hidden">Facebook</span>
                </a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;