
import { AxiosRequestConfig } from 'axios';
import client from './client';

export const get = (url: string) => client.get(url).then(res => res.data.data)

export const post = (url: string, body?: any, config?: AxiosRequestConfig<any>) => client.post(url, body, config).then(res => res.data.data)

export const destroy = (url: string) => client.delete(url)