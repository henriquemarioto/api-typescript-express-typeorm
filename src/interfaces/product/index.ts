export interface IPoduct {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface IPoductCreate {
  name: string;
  description: string;
  price: number;
}
