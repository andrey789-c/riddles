export interface IData {
	text: string;
	answer: string;
	id: number;
	isAnswered: boolean;
}

export const data: IData[] = [
  {
    id: 1,
    text: 'Какое явление природы, согласно сказкам Пушкина, названо богобоязненным?',
    answer: 'Ветер',
    isAnswered: false
  },
  {
    id: 1,
    text: 'Первый летающий аппарат? (смотрите в Библию)',
    answer: 'колесница',
    isAnswered: false
  },
  {
    id: 1,
    text: 'Во время потопа в ковчеге было восемь человек и много животных. Каким был ковчег?',
    answer: 'мокрым',
    isAnswered: false
  },
]