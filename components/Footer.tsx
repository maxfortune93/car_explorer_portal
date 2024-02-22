import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";
const Footer = () => {
  return (
    <footer
      className="flex flex-col tex-brown-100 mt-6 border-t border-gray-100 "
      id="about_footer"
    >
      <div
        className="flex max-md:flex-col flex-wrap justify-between gap-5
                        sm:px-16 px-6 py-10 max-w-[1440px] mx-auto"
      >
        <div className="flex flex-col justify-start items-start gap-2">
          <Image
            src="/logo-updated.svg"
            alt="logo"
            width={180}
            height={50}
            className="object-contain"
          />

          <p className="text-base text-gray-700">
            M-Afrik Carhub 2024 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links ">
          <div className="footer__link sm:ml-20">
            <h3 className="font-bold">About</h3>

            <p className="text-base text-gray-700 ">
              This car project is built with Next.js 14 to further learn and
              enhance my skills. I used external APIs for listing cars & images
              through RapidAPI and the Imagin.studio service. If you liked the
              project, I would love to discuss the possibility of joining your
              team.
            </p>
          </div>
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              <div className="flex flex-wrap gap-4">
                {link.links.map((item) => (
                  <Link
                    target="_blank"
                    key={item.title}
                    href={item.url}
                    className="text-gray-500"
                  >
                    <Image
                      src={item.image}
                      alt="logo"
                      width={60}
                      height={20}
                      className="object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex justify-between items-center flex-wrap
                 border-t border-gray-100 sm:px-16 px-6 py-10"
      >
        <b>Marouane Pondikpa @2024</b>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
