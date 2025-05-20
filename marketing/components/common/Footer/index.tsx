import { ReactElement } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = (): ReactElement => {
  return (
    <div className="w-full bg-white text-accent-5">
      <div className="w-full max-w-7xl mx-auto px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex gap-4 flex-col items-start">
            <h5 className="text-xl font-bold">Our Community</h5>
            <div className="flex gap-4">
              <Link href="/">
                <FaFacebook className="size-6 text-blue-500" />
              </Link>
              <Link href="/">
                <FaInstagram className="size-6 text-blue-500" />
              </Link>
            </div>
          </div>
          <div className="flex gap-4 flex-col items-start">
            <h5 className="text-xl font-bold">Company Info</h5>
            <div className="flex flex-col gap-2">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-services">Terms of Services</Link>
              <Link href="/">Blog</Link>
            </div>
          </div>
          <div className="flex gap-4 flex-col items-start">
            <h5 className="text-xl font-bold">Mobile App</h5>
            <div className="flex flex-col gap-2">
              <Link href="/">IOS & Android</Link>
              <Link href="/">Customers</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-4 text-gray-200 font-semibold text-center">
        <p>MHNTI Copyright 2025</p>
        <p>
          Made With Love By&nbsp;
          <Link href="/" className="text-blue-500">
            Lyvewave
          </Link>
          &nbsp;All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
