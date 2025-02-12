export interface ChildProps {
  children: React.ReactNode;
}

export interface IProduct {
  _id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
}

export interface QueryProps {
  params: string;
  key: string;
  value?: string | null;
}
