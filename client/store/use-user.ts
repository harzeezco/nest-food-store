import { create } from 'zustand';

interface IUser {
  _id: string;
  email: string;
  name: string;
  photo: string;
}

interface IUserState {
  setUser: (user: IUser | null) => void;
  user: IUser | null;
}

export const saveUserDataToLocal = (user: IUser) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(user));
  }
};

export const useUser = create<IUserState>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
}));

const loadUserFromLocal = () => {
  let storedUser;

  if (typeof window !== 'undefined') {
     storedUser = localStorage.getItem('user');
   }

  if (storedUser) {
    const userData = JSON.parse(storedUser);

    useUser.setState({ user: userData });
  }
};

loadUserFromLocal();
