import { HomeProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import Post from '../components/post';

export const getStaticProps = async () => {
  const urlMangas = `${process.env.API_URL}/mangas?populate=*`;
  const urlBlogs = `${process.env.API_URL}/blogs?populate=*`;

  const [resMangas, resBlogs] = await Promise.all([
    fetch(urlMangas),
    fetch(urlBlogs),
  ]);

  const [{ data: mangas }, { data: blogs }] = await Promise.all([
    resMangas.json(),
    resBlogs.json(),
  ]);

  return {
    props: {
      mangas,
      blogs,
    },
  };
};

const Home = ({ mangas, blogs }: HomeProps) => {
  return (
    <>
      <Layout title="Home" description="Manga and Anime Shop">
        <div className="text-center my-10">
          <h2 className="text-gray-700 text-2xl md:text-4xl font-bold mb-1">
            Code Bushido
          </h2>
          <p className="text-gray-500 text-lg">
            New & Top Series, Boxed Sets & Gifts for Manga & Anime Fans
          </p>
        </div>
        <div className="flex justify-center">
          <Image src={'/img/home.webp'} alt="" width={1000} height={100} />
        </div>

        <main className="mt-20 container mx-auto">
          <div>
            <h1 className="text-center font-semibold p-4 text-gray-600">
              Our Collection
            </h1>
            <Link
              href={'/shop'}
              className="bg-[#186bb8] px-6 py-2 rounded-md text-white font-semibold"
            >
              Go to Shop
            </Link>
          </div>
          <div className="w-full flex space-x-5 overflow-x-scroll p-6 snap-x snap-mandatory mt-10 md:mt-2 scrollbar">
            {mangas.map((manga: any) => {
              return (
                <Image
                  key={manga.id}
                  src={manga.attributes.image.data.attributes.url}
                  alt="manga"
                  width={200}
                  height={40}
                />
              );
            })}
          </div>
        </main>

        <section className="mt-20 container mx-auto mb-20">
          <h2 className="text-center font-semibold p-4 text-gray-600 text-3xl py-4">
            Blog
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {blogs.map((post: any) => {
              return <Post key={post.id} post={post} />;
            })}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
