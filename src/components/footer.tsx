import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-gray-100 dark:bg-gray-900">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8"></div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <h4 className="text-xl md:text-3xl font-black text-[#56a4ed]">
              Code Bushido
            </h4>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 lg:text-left">
              Here you will find the best sleeves at your fingertips and if you
              do not find any, we will get it for you in an instant.
            </p>
          </div>

          <nav aria-label="Footer Nav" className="mt-12 lg:mt-0">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12">
              <li>
                <Link
                  href={'/'}
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href={'/about'}
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href={'/shop'}
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  href={'/blog'}
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 lg:text-right">
          Copyright &copy; 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
