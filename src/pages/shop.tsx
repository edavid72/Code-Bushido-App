import Layout from '@/components/layout';
import MangaList from '@/components/manga-list';

// Fetching of data
export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.API_URL}/mangas?populate=*`);
  const { data: mangas } = await response.json();

  return {
    props: { mangas },
  };
};

interface FetchMangaProps {
  mangas: [];
}

const Shop = ({ mangas }: FetchMangaProps) => {
  // console.log(mangas);
  return (
    <>
      <Layout title="Shop" description="Buy your favorite Mangas">
        <main className="container mx-auto py-4 mb-10 text-gray-600 p-2">
          <h1 className="text-[#2877c2] text-center font-black text-2xl md:text-4xl uppercase py-2 mb-8">
            our collection
          </h1>

          <MangaList mangas={mangas} />
        </main>
      </Layout>
    </>
  );
};

export default Shop;
