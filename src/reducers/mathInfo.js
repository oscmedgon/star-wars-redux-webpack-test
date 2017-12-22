{
  loading: bool,
  players: [
    player1: {
      name: string,
      vehicle: {
        speed: number,
        cargo: number
      }
    },
    player2: {
      name: string,
      vehicle: {
        speed: number,
        cargo: number
      }
    }
  ],
  rules: {
    gold: string,
    distance: number
  }
}
