import Image from 'next/image';
import Link from 'next/link';
import { title } from 'process';
import React from 'react';

interface MangaProps {
  manga: {
    createdAt: string;
    description: string;
    image: any;
    mangaka: string;
    price: number;
    publishedAt: string;
    title: string;
    updatedAt: string;
    url: string;
  };
}

const Manga = ({ manga }: MangaProps) => {
  const { title, description, image, mangaka, price, url } = manga;

  // console.log(image.data.attributes.formats.large?.url);

  return (
    <div className="bg-gray-100 text-gray-500 m-4 p-4 rounded-md">
      <Image
        src={image.data.attributes.formats.large?.url}
        alt={`Manga Image ${title}`}
        width={800}
        height={60}
        className="rounded-md h-4/6"
      />

      <div className="h-2/6 flex flex-col justify-center my-2 space-y-3">
        <h3 className="text-xl font-bold text-[#2a78c3]">{title}</h3>
        <h4>{mangaka}</h4>
        <p className='text-[#2a78c3] text-lg font-semibold'>$ {price}</p>
        <Link href={`/mangas/${url}`} className='bg-[#4b94d9] hover:bg-[#2a78c3] transition-all duration-300 text-white font-semibold text-lg text-center py-1 mt-2 rounded-md'>See Product</Link>
      </div>
    </div>
  );
};

export default Manga;
