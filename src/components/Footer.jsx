import React from "react";
import { socials } from "@/constants";
const Footer = () => {
  return (
    <div className="text-white bg-[#FD6924] py-4">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 items-center">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 justify-between">
            <div className="flex flex-col gap-3">
              <h4 className="text-lg md:text-xl font-bold">About Us</h4>
              <div className="flex flex-col gap-1">
                <h5 className="text-sm md:text-base">
                  GitStar for Information Technology
                </h5>
                <h5 className="text-sm md:text-base">
                  شركة افي سينا لتقنية المعلومات
                </h5>
                <h5 className="text-sm md:text-base">
                  Commercial Registration: 4030497928
                </h5>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-lg md:text-xl font-bold">Communicate</h4>
              <div className="flex flex-col gap-1">
                <a href="/support">
                  <h5 className="text-sm md:text-base">Support</h5>
                </a>
                <a href="/contact">
                  <h5 className="text-sm md:text-base">Contact</h5>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-lg md:text-xl font-bold">Legal</h4>
              <div className="flex flex-col gap-1">
                <a href="/terms-and-conditions">
                  <h5 className="text-sm md:text-base">
                    User Terms &amp; Conditions
                  </h5>
                </a>
                <a href="/cloud-terms-and-conditions">
                  <h5 className="text-sm md:text-base">
                    Cloud Terms &amp; Conditions
                  </h5>
                </a>
                <a href="/privacy-policy">
                  <h5 className="text-sm md:text-base">Privacy Policy</h5>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-lg md:text-xl font-bold">Download App</h4>
              <div className="flex items-center gap-6">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://apps.apple.com/sa/app/icenna/id6446591202"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#0091ea"
                      d="M14.1 42h19.8a8.1 8.1 0 008.1-8.1V27H6v6.9a8.1 8.1 0 008.1 8.1z"
                    ></path>
                    <path fill="#00b0ff" d="M6 16H42V27H6z"></path>
                    <path
                      fill="#40c4ff"
                      d="M33.9 6H14.1A8.1 8.1 0 006 14.1V16h36v-1.9A8.1 8.1 0 0033.9 6z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M22.854 18.943l1.738-2.967-1.598-2.727a1.5 1.5 0 00-2.588 1.516l2.448 4.178z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M26.786 12.714a1.498 1.498 0 00-2.052.536L16.09 28h3.477l7.754-13.233a1.5 1.5 0 00-.535-2.053zM34.521 32.92L26.91 19.933l-.763 1.303a4.115 4.115 0 00-.185 3.011l5.972 10.191a1.498 1.498 0 002.052.535 1.5 1.5 0 00.535-2.053z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M25.473 27.919l-.171-.289a4.01 4.01 0 00-.498-.621H12.3c-.829 0-1.5.665-1.5 1.484s.671 1.484 1.5 1.484h13.394a2.696 2.696 0 00-.221-2.058zM16.66 32.961a2.78 2.78 0 00-2.03-.959h-.004a4.132 4.132 0 00-.932.087l-.487.831a1.5 1.5 0 002.588 1.518l.865-1.477zM30.196 27.009H35.7c.829 0 1.5.665 1.5 1.484s-.671 1.484-1.5 1.484h-5.394c-.194-.653-.296-2.781-.11-2.968z"
                    ></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://play.google.com/store/apps/details?id=com.icenna"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <linearGradient
                      id="AraffhWwwEqZfgFEBZFoqa_L1ws9zn2uD01_gr1"
                      x1="18.102"
                      x2="25.297"
                      y1="3.244"
                      y2="34.74"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#35ab4a"></stop>
                      <stop offset="0.297" stopColor="#31a145"></stop>
                      <stop offset="0.798" stopColor="#288739"></stop>
                      <stop offset="1" stopColor="#237a33"></stop>
                    </linearGradient>
                    <path
                      fill="url(#AraffhWwwEqZfgFEBZFoqa_L1ws9zn2uD01_gr1)"
                      d="M13.488 4.012c-2.694-1.504-5.883-.234-7.038 2.311L24.126 24l9.014-9.014L13.488 4.012z"
                    ></path>
                    <linearGradient
                      id="AraffhWwwEqZfgFEBZFoqb_L1ws9zn2uD01_gr2"
                      x1="19.158"
                      x2="21.194"
                      y1="23.862"
                      y2="66.931"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#f14e5d"></stop>
                      <stop offset="0.499" stopColor="#ea3d4f"></stop>
                      <stop offset="1" stopColor="#e12138"></stop>
                    </linearGradient>
                    <path
                      fill="url(#AraffhWwwEqZfgFEBZFoqb_L1ws9zn2uD01_gr2)"
                      d="M33.14 33.014L24.126 24 6.45 41.677c1.156 2.546 4.345 3.815 7.038 2.312L33.14 33.014z"
                    ></path>
                    <linearGradient
                      id="AraffhWwwEqZfgFEBZFoqc_L1ws9zn2uD01_gr3"
                      x1="32.943"
                      x2="36.541"
                      y1="14.899"
                      y2="43.612"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#ffd844"></stop>
                      <stop offset="0.519" stopColor="#ffc63f"></stop>
                      <stop offset="1" stopColor="#ffb03a"></stop>
                    </linearGradient>
                    <path
                      fill="url(#AraffhWwwEqZfgFEBZFoqc_L1ws9zn2uD01_gr3)"
                      d="M41.419 28.393c1.72-.96 2.58-2.676 2.581-4.393-.001-1.717-.861-3.434-2.581-4.393l-8.279-4.621L24.126 24l9.014 9.014 8.279-4.621z"
                    ></path>
                    <linearGradient
                      id="AraffhWwwEqZfgFEBZFoqd_L1ws9zn2uD01_gr4"
                      x1="13.853"
                      x2="15.572"
                      y1="5.901"
                      y2="9.548"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#aeaeae"></stop>
                      <stop offset="1" stopColor="#d5d5d5"></stop>
                    </linearGradient>
                    <path
                      fill="url(#AraffhWwwEqZfgFEBZFoqd_L1ws9zn2uD01_gr4)"
                      d="M9.15 10.152c1.9 1.063 4.338.394 5.402-1.688L24.126 24l-6.648 6.648c-1.063 1.063-1.604 2.5-1.688 5.402L9.15 10.152z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8 border-t border-t-white pt-4">
          <div className="flex items-center">
            <img src="/supergit-01.png" alt="Company Logo" className="h-12" />
            <span className="ml-2 text-sm md:text-base">
              © 2024 GitStar. All rights reserved.
            </span>
          </div>
          {/* <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/avicennait/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/AvicennaIT"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/avicennait/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/AvicennaIT"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://maroof.sa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maroof
            </a>
          </div> */}
          <div className="flex justify-center gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={
                  social.name === "maroof"
                    ? social.href
                    : `https://www.${social.name}.com`
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={social.url}
                  alt={`${social.name} logo`}
                  className="w-8 h-8"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
