import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsFillCartPlusFill } from 'react-icons/bs';

const Header = () => {
  const { pathname } = useRouter();
  // console.log(pathname);

  return (
    <header aria-label="Page Header" className="bg-hero-pattern bg-center">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left flex">
            <Link href={'/'}>
              <Image
                src={'/img/logo.png'}
                alt={'logo'}
                width={200}
                height={20}
                className="w-24 md:w-40"
              />
            </Link>
            <div>
              <h1 className="text-2xl font-black text-gray-100 sm:text-4xl">
                Code Bushido
              </h1>

              <p className="mt-1.5 text-sm sm:text-lg text-gray-200">
                The best Anime & Manga store
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <nav className="flex items-center">
              {/*Link to: Home Page */}
              <Link
                href={'/'}
                className={`text-white items-center md:text-xl font-bold px-3 py-1 rounded-md hover:bg-[#2877c2] transition-all duration-300 m-1 ${
                  pathname === '/' ? 'bg-[#2877c2]' : undefined
                }`}
              >
                Home
              </Link>
              {/* Link to: About Page */}
              <Link
                href={'/about'}
                className={`text-white items-center md:text-xl font-bold px-3 py-1 rounded-md hover:bg-[#2877c2] transition-all duration-300 m-1 ${
                  pathname === '/about' ? 'bg-[#2877c2]' : undefined
                }`}
              >
                About
              </Link>
              {/* Link to: Shop Page */}
              <Link
                href={'/shop'}
                className={`text-white items-center md:text-xl font-bold px-3 py-1 rounded-md hover:bg-[#2877c2] transition-all duration-300 m-1 ${
                  pathname === '/shop' ? 'bg-[#2877c2]' : undefined
                }`}
              >
                Shop
              </Link>
              {/* Link to: Blog Page */}
              <Link
                href={'/blog'}
                className={`text-white items-center md:text-xl font-bold px-3 py-1 rounded-md hover:bg-[#2877c2] transition-all duration-300 m-1 ${
                  pathname === '/blog' ? 'bg-[#2877c2]' : undefined
                }`}
              >
                Blog
              </Link>

              {/* Shopping Bag */}
              <Link
                href={'/bag'}
                className={`text-white flex border-2 border-transparent items-center font-bold px-3 py-1 rounded-md hover:bg-[#2877c2] transition-all duration-300 m-1 ${
                  pathname === '/bag' ? 'border-white bg-[#2877c2]' : undefined
                }`}
              >
                <BsFillCartPlusFill className="text-2xl" />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
