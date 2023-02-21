import Layout from '@/components/layout';
import Image from 'next/image';
import { dateFormatter } from '../../utils/helpers';
import { title } from 'process';

interface UrlProps {
  query: {
    url: string;
  };
}

interface PostProps {
  post: [
    {
      [x: string]: any;
      0: {
        id: number;
        attributes: {
          title: string;
          content: string;
          publishedAt: string;
          image: { data: { attributes: { url: string } } };
        };
      };
    }
  ];
}

export const getServerSideProps = async ({ query: { url } }: UrlProps) => {
  // http://localhost:1337/api/blogs?filters[url]=black-clover-manga-exceeds-18-million-copies-in-circulation-worldwide&populate=*
  const response = await fetch(
    `${process.env.API_URL}/blogs?filters[url]=${url}&populate=*`
  );
  const { data: post } = await response.json();

  return {
    props: { post },
  };
};

const Post = ({ post }: PostProps) => {
  console.log(post);

  const { id, attributes } = post[0];

  return (
    <Layout title={attributes.title} description="Blog">
      <article className="container md:w-3/6 mx-auto p-2">
        <div className='flex justify-center md:p-2 md:mt-6'>
          <Image
            src={attributes.image.data.attributes.url}
            alt="jh"
            width={900}
            height={100}
            className="bg-blue"
          />
        </div>
        <div className="block justify-center my-1">
          <h2 className="text-lg md:text-2xl font-bold text-gray-800">
            {attributes.title}
          </h2>
          <p className="text-[#2877c2] md:text-lg font-semibold">
            {dateFormatter(attributes.publishedAt)}
          </p>
        </div>
        <div className='my-10'>
          <p className='text-gray-700 text-justify tracking-wide leading-7'>{attributes.content}</p>
        </div>
      </article>
    </Layout>
  );
};

export default Post;
