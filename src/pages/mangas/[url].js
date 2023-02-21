import Layout from '@/components/layout';
import Image from 'next/image';
import { useState } from 'react';

export const getServerSideProps = async ({ query: { url } }) => {
  console.log(`URL: ${url}`);
  // http://localhost:1337/api/mangas?filters[url]=attack-on-titan-28&populate=*
  const response = await fetch(
    `${process.env.API_URL}/mangas?filters[url]=${url}&populate=*`
  );

  const { data: manga } = await response.json();

  return {
    props: {
      manga,
    },
  };
};

const Product = ({ manga, addShopBag }) => {
  const { title, description, mangaka, price, image } = manga[0].attributes;
  console.log(manga[0].id);

  const [quantity, setQuantity] = useState(0);

  const handleChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity < 1) {
      alert('Invalid amount');
      return;
    }

    // Build Object mangas
    const mangaSelected = {
      id: manga[0].id,
      image: image.data.attributes.url,
      title,
      mangaka,
      price,
      quantity,
    };

    addShopBag(mangaSelected);
  };

  return (
    <Layout title={title} description="Buy your favorite Mangas">
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            <Image
              src={image.data.attributes.url}
              width={400}
              height={30}
              alt="manga"
              className="rounded-md"
            />

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {mangaka}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium my-3">
                {title}
              </h1>

              <p className="leading-relaxed">{`${description.slice(
                0,
                700
              )}...`}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <div className="relative">
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"></span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <form onSubmit={handleSubmit}>
                  <div className="block">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      ${price}
                    </span>
                    <div className="py-2 mt-4">
                      <label htmlFor="" className="mr-6">
                        Quantity
                      </label>
                      <select
                        name=""
                        id="quantity"
                        className="text-center rounded-md p-1"
                        onChange={handleChange}
                      >
                        <option value="0">-- Select --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>

                  <input
                    type="submit"
                    value={'Add to  Bag'}
                    className="flex ml-auto text-white bg-[#468dd5] border-0 py-2 px-6 focus:outline-none hover:bg-[#2b76c2] rounded my-6"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
