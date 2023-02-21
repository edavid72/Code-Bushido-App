import Layout from '@/components/layout';
import Post from '@/components/post';

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_URL}/blogs?populate=*`);
  const { data: blogs } = await response.json();

  return {
    props: {
      blogs,
    },
  };
};

interface BlogProps {
  blogs: [
    {
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
    }
  ];
}

const Blog = ({ blogs }: BlogProps) => {
  // console.log(blogs);
  return (
    <Layout
      title="Blog"
      description="Blog about the most recent and relevant anime & manga"
    >
      <main className="container mx-auto py-4 mb-10 text-gray-600 p-2">
        <h1 className="text-[#2877c2] text-center font-black text-2xl md:text-4xl uppercase py-2 mb-8">
          Code Bushido Blog
        </h1>

        <div className='grid md:grid-cols-2 gap-10'>
          {blogs.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
      </main>
    </Layout>
  );
};

export default Blog;
