export type CloudinaryResource = {
  url: string;
  publicId: string;
};

export type StoreData = {
  _id: string;
  merchant: string;
  name: string;
  category: string;
  tags?: string[] | [];
  price: number;
  characteristics?: string[];
  mainImage: CloudinaryResource;
  additionals?: CloudinaryResource[];
};

export type Category = {
  _id: string;
  title: string;
  tags?: string[];
};
