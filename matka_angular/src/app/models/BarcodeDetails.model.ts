
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

  details?: {
    game_type_id: number,
    game_name: string,
    series_name: string,
    number_set: string,
    quantity: number
  }[];
}
