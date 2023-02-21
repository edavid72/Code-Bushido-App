import Layout from '@/components/layout';
import Image from 'next/image';
import { BagProps, ProductProps } from '../types';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';

const Bag = ({ shopBag, updateQty, deleteItem }: BagProps) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotalPayment = shopBag.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setTotal(calculateTotalPayment);
    console.log(+calculateTotalPayment.toFixed(2));
  }, [shopBag]);

  return (
    <Layout title="Shopping Bag" description="Shopping Bag">
      <main className="container mx-auto py-4 mb-10 text-gray-600 p-2">
        <h1 className="text-[#2877c2] text-center font-black text-2xl md:text-4xl uppercase py-2 mb-8">
          Shopping Bag
        </h1>

        <div className="md:w-8/12 mx-auto">
          <div>
            {shopBag.map((item: ProductProps) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center border-b-2 border-gray-200"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={130}
                    height={40}
                    className="m-4"
                  />

                  <div className="w-6/12 space-y-3">
                    <h3 className="font-bold">{item.title}</h3>
                    <p>{item.mangaka}</p>
                    <div>
                      <p>Qty:</p>
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateQty({
                            quantity: +e.target.value,
                            id: item.id,
                          })
                        }
                        className="p-1 my-1 rounded-md text-center"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-3/12 flex space-x-5 items-end">
                    <div>
                      <p className="font-bold">$ {item.price}</p>
                      <p className="font-light">
                        <span>SubTotal</span> ${' '}
                        {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <button onClick={() => deleteItem(item.id)}>
                      <RiDeleteBinLine className="text-2xl text-gray-500 hover:text-gray-600 transition-all duration-200 cursor-pointer" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <aside className="bg-green-300">
            <div>
              <p>Total</p>
              <p>$ {total}</p>
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Bag;
