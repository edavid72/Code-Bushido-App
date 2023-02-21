import { dateFormatter } from '@/utils/helpers';
import Image from 'next/image';
import Link from 'next/link';
import { title } from 'process';

interface PostProps {
  post: {
    id: number;
    attributes: {
      title: string;
      content: string;
      publishedAt: string;
      url: string;
      image: {
        data: {
          id: number;
          attributes: {
            name: string;
            url: string;
          };
        };
      };
    };
  };
}

const Post = ({ post }: PostProps) => {
  console.log(post);

  const { id, attributes } = post;

  return (
    <article className="flex bg-white transition hover:shadow-xl">
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          dateTime="2022-10-10"
          className="flex items-center justify-center gap-4 text-xs font-bold uppercase text-gray-900"
        >
          <span>{dateFormatter(attributes.publishedAt)}</span>
        </time>
      </div>

      <div className="hidden sm:block sm:basis-56">
        <Image
          src={attributes.image.data.attributes.url}
          alt={attributes.image.data.attributes.name}
          width={400}
          height={40}
          className="aspect-square h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <a href="#">
            <h3 className="font-bold uppercase text-gray-800">
              {attributes.title}
            </h3>
          </a>

          <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
            {attributes.content}
          </p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <Link
            href={`/blog/${attributes.url}`}
            className="block bg-[#2e7ec9] px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-[#186bb8]"
          >
            Read Post
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Post;
