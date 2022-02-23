

export class StockistMaster{
  success?: number;
  data?: {
    userId: number,
    userName: string,
    pin: string,
    superStockiestId: number;
    superStockistName: {
      id: 5,
      user_name: string,
      email: string,
      mobile1: null,
      user_type_id: number,
      opening_balance: number,
      closing_balance: number,
      commission: number
    };
    userTypeName?: string,
    userTypeId: number,
    balance: number
  };
  error?: any;
}
