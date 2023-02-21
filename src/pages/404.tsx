import Layout from '@/components/layout';
import Image from 'next/image';
import Link from 'next/link';

const Page404 = () => {
  return (
    <Layout title="" description="">
      <div className="md:flex lg:flex justify-center">
        <div className="flex flex-col justify-center">
          <h2 className="text-center font-bold text-2xl mt-10 text-gray-500">
            Page not found
          </h2>
          <div className="flex justify-center">
            <Link href={'/'} className="text-[#2978c3] font-bold p-4">
              Go Home
            </Link>
          </div>
        </div>
        <Image
          src={'/img/error404.svg'}
          alt="error404"
          width={500}
          height={40}
          className=""
        />
      </div>
    </Layout>
  );
};

export default Page404;
