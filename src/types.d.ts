// Props product(manga) for shopping bag functions
export interface ProductProps {
  id: number;
  title: string;
  mangaka: string;
  image: string;
  price: number;
  quantity: number;
}

export interface BagProps {
  shopBag: [
    {
      mangaka: ReactNode;
      id: title;
      title: string;
      image: string;
      price: number;
      quantity: number;
    }
  ];
  updateQty: Function;
  deleteItem: Function;
}

export interface HomeProps {
  mangas: [
    id: number,
    attributes: {
      title: string;
      description: string;
      mangaka: string;
      url: string;
      image: {
        data: {
          attributes: {
            url: string;
            formats: {
              medium: { url: string };
            };
          };
        };
      };
    }
  ];
  blogs: [
    id: number,
    attributes: {
      title: string;
      content: string;
      publishedAt: string;
      url: string;
      image: { data: { attributes: { url: string } } };
    }
  ];
}
