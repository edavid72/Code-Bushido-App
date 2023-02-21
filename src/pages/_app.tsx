import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { ProductProps } from '../types';

const App = ({ Component, pageProps }: AppProps) => {
  const bagLocalStorage =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('shopBag')) ?? []
      : [];

  const [shopBag, setShopBag] = useState<any[]>(bagLocalStorage);
  const [readyPage, setReadyPage] = useState(false);

  useEffect(() => {
    setReadyPage(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('shopBag', JSON.stringify(shopBag));
  }, [shopBag]);

  // Function for Add products in shop bag
  const addMangaBag = (manga: ProductProps) => {
    if (
      shopBag.some((mangaState: ProductProps) => mangaState.id === manga.id)
    ) {
      const updatedBag: any = shopBag.map((mangaState: ProductProps) => {
        if (mangaState.id === manga.id) {
          mangaState.quantity = manga.quantity;
        }
        return mangaState;
      });
      setShopBag(updatedBag);
    } else {
      setShopBag([...shopBag, manga]);
    }
  };

  const updateQty = (manga: ProductProps) => {
    const updatedBag = shopBag.map((mangaState) => {
      if (mangaState.id === manga.id) {
        mangaState.quantity = manga.quantity;
      }
      return mangaState;
    });

    setShopBag(updatedBag);
  };

  const deleteItem = (id: number) => {
    const updatedBag = shopBag.filter((item) => item.id != id);
    setShopBag(updatedBag);
  };

  return readyPage ? (
    <Component
      {...pageProps}
      shopBag={shopBag}
      shopManga={shopBag}
      addShopBag={addMangaBag}
      updateQty={updateQty}
      deleteItem={deleteItem}
    />
  ) : null;
};

export default App;
