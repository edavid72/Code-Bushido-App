import Layout from '@/components/layout';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <Layout title="About" description="About Us">
        <main className="container mx-auto py-4 mb-10 text-gray-600 p-2">
          <h1 className="text-[#2877c2] text-center font-bold text-xl md:text-4xl uppercase py-2 mb-8">
            About Us
          </h1>

          <div className="md:grid md:grid-cols-2 items-center gap-6">
            <Image
              src={'/img/aboutus.jpg'}
              alt="aboutUs"
              width={700}
              height={500}
              className="linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)) rounded-md"
            />

            <div>
              <p className='text-justify my-4 md:text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                assumenda eaque necessitatibus expedita voluptatum consequuntur
                fugiat ullam minus! Modi, dolorem. Aliquid fugit amet nihil quam
                delectus quis eius quaerat quas. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Qui assumenda eaque necessitatibus
                expedita voluptatum consequuntur fugiat ullam minus! Modi,
                dolorem. Aliquid fugit amet nihil quam delectus quis eius
                quaerat quas.
              </p>
              <br />
              <p className='text-justify my-4 md:text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                assumenda eaque necessitatibus expedita voluptatum consequuntur
                fugiat ullam minus! Modi, dolorem. Aliquid fugit amet nihil quam
                delectus quis eius quaerat quas.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default About;
