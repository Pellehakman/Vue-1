export interface InputFormType {
  text: string, 
  password: string
}

export interface Player {
  name: string,
  weapon: string,
  kills: number;
  id: string
}

export type OrderTerm = 'name' | 'kills'