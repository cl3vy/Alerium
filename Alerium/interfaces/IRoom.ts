interface IRoom {
  id: number;
  roomNumber: number;
  booked: boolean;
  startDate: Date;
  endDate: Date;
  typology: 'single' | 'double' | '1 + 1' | '2 + 1',
  amountPeople: number,
  squareMeters: number,

}
export type {IRoom}
