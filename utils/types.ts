export type HandleStoryIdClick = (id: number) => void;

export type Item = {
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  time: number
  title: string
  type: string
  url: string
}
