import fetch from 'node-fetch';

export enum Categories {
  Best = 'best',
  Top = 'top',
  New = 'new'
}

const baseUrl = 'https://hacker-news.firebaseio.com/v0';

export const getItem = async (itemId: number): Promise<string> => {
  const url = `${baseUrl}/item/${itemId}.json`;
  const response = await fetch(url);
  const data: string = await response.json();

  return data;
}

export const getStoryIds = async (category: string): Promise<number[]> => {
  const url = `${baseUrl}/${category}stories.json`;

  return await _obtainCollectionJson(url);
}

// export const getUser = (userId: number) => {
//   const url = `${baseUrl}/user/${userId}.json`;
//   return fetch(url);
// }

const _obtainCollectionJson = async (url: string): Promise<number[]> => {
  const response = await fetch(url);
  const data: number[] = await response.json();

  return data;
}
