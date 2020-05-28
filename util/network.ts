import fetch from 'node-fetch'

const baseUrl: string = 'https://hacker-news.firebaseio.com/v0';

export const getItem: any = async (itemId) => {
  const url: string = `${baseUrl}/item/${itemId}.json`;
  const response: any = await fetch(url);
  const data: any = await response.json();

  return data;
}

export const getUser: any = (userId) => {
  const url: string = `${baseUrl}/user/${userId}.json`;
  return fetch(url);
}

export const getTopStoryIds: any = async () => {
  const url: string = `${baseUrl}/topstories.json`;
  const response: any = await fetch(url);
  const data: any = await response.json();

  return data;
}
