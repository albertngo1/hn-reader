import { getItem } from './network';
import CRC32 from 'crc-32';

export const extractHostname = (url: string): string => {
  let hostname: string;
  //find & remove protocol (http, ftp, etc.) and get hostname

  if (url.indexOf("//") > -1) {
    hostname = url.split('/')[2];
  }
  else {
    hostname = url.split('/')[0];
  }

  //find & remove port number
  hostname = hostname.split(':')[0];
  //find & remove "?"
  hostname = hostname.split('?')[0];

  return hostname;
}

export const mapIdsToItem = (ids: number[]): Promise<string[]> => {
  return Promise.all(ids.map(id => getItem(id)));
}

export const stringToColour = function (str: string): string {
  return '#' + CRC32.str(str).toString().slice(1, 7);
}
