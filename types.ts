export interface userInfo {
  name: string;
  password: string;
  email: string;
  picture: string;
  role: string[];
  passwordResetCode: string;
}
export interface GetBusinessInfo {
  data: BusinessInfo[];
}

export interface BusinessInfo {
  _id: string;
  name: string;
  slug: string;
  email: string;
  description: string;
  phone: string;
  category: string;
  owners: Owner[];
  businessLogo?: image;
  artifacts?: image[];
  role: string[];
  creator: string;
  createdAt: Date;
  updatedAt: Date;
  v: number;
}

export interface image {
  eTag: string;
  location: string;
  businessLogoKey: string;
  key: string;
  bucket: Bucket;
}

export enum Bucket {
  SEHub1 = "se-hub-1",
}

export interface Owner {
  name: string;
  title: string;
  avatar: image;
}
