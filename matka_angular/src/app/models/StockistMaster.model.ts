

export class StockistMaster{
  success?: number;
  data?: {
    userId: number,
    userName: string,
    pin: string,
    superStockiest:  {
      userId: number,
      userName: string,
      pin: string,
      userTypeId: number,
      balance: number,
    };
    userTypeName?: string,
    userTypeId: number,
    balance: number
  };
  error?: any;
}
