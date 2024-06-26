export interface User {
  picture: {
    thumbnail: string;
  };
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  dob: {
    date: string;
    age: number;
  };
  gender: "male" | "female";
  location: {
    city: string;
    state: string;
    country: string;
  };
}

export interface InitialState {
  users: User[];
  loading: boolean;
  error: any | undefined;
}
