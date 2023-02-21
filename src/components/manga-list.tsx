import Manga from './manga';

interface FetchMangaProps {
  mangas: [];
}

interface AttributesMangaProps {
  id: number;
  attributes: {
    createdAt: string;
    description: string;
    image: {};
    mangaka: string;
    price: number;
    publishedAt: string;
    title: string;
    updatedAt: string;
    url: string;
  };
}

const MangaList = ({ mangas }: FetchMangaProps) => {
  // console.log(mangas);
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {mangas?.map((manga: AttributesMangaProps) => {
        return <Manga manga={manga.attributes} key={manga.id} />;
      })}
    </div>
  );
};

export default MangaList;
