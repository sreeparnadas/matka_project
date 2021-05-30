

export class GameInputSaveResponse{
  success?: number;
  data?: {
    play_master: {
      barcodeNumber: string,
      drawTime: {
        drawId?: number,
        drawName?: string,
        startTime?: string,
        endTime?: string,
        visibleTime?: string,
        active?: number
      },
      terminal?: {
        terminalId?: number,
        terminalName?: string,
        pin?: string,
        balance?: number
      },
      ticketTakenTime?: string
    },
    game_input?: {
      single_game_data?: {
        singleNumber: number,
        quantity: number
      }[],
      triple_game_data?: {
        visibleTripleNumber: number,
        quantity: number,
        singleNumber: number
      }[],
    },
    amount?: number
  };
  error?: any;
}
