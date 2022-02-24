import { SuperStockist } from "./SuperStockist.model";


export class Stockist{

  userId: number;
  userName: string;
  pin: string;
  userTypeName?: string;
  userTypeId: number;
  balance: number;
  superStockiest? : SuperStockist;
}
