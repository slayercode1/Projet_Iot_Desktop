export interface ILogin {
  email: string
  password: string
}

export interface IRegister extends ILogin {
  firstName: string
  lastName: string
}

export interface IToken {
  accessToken: string
  refreshToken: string
}

export interface IUser {
  firstName: string
  lastName: string
}

export interface IPlant {
  id: string
  name: string
  identifiant: string
  notification: boolean
  humidity: number
  seuilAlerte: 'low' | 'medium' | 'high'
  dateTime: Date
}

export interface IPlantNotificationHistory {
  id: string
  date: string
  message: string
  plant: IPlant
}

export type IAlert = IPlantNotificationHistory
