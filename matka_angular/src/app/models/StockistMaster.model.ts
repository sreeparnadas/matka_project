

export class StockistMaster{
  success?: number;
  data?: {
    userId: number,
    userName: string,
    pin: string,
    userTypeName?: string,
    userTypeId: number,
    balance: number
  };
  error?: any;
}
