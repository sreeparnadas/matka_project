
export class BarcodeDetails{
  barcode?: string;
  single?: {
    single_number: number,
    quantity: number
  }[];
  triple?: {
      visible_triple_number: string,
      single_number: number,
      quantity: number
    }[];

}
