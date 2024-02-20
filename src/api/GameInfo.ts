export interface GameInfo {
  id: string
  name: string
}

export interface CreateGameRequest {
}

export interface JoinGameRequest {
  gameId: string
}

export interface SelectGameResponse {
  status: string
  gameId: string
  message?: string
}
