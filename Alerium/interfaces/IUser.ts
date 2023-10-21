type IUser = {
  name: string;
  surname: string;
  birthday: Date | undefined;
  phoneNumber: number | undefined;
  email: string;
  gender: 'male' | 'female' | 'other',
  stateId: string
};
export type { IUser };
