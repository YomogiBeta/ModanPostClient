
import { AxiosRequestConfig, AxiosRequestHeaders, RawAxiosRequestConfig } from 'axios';
import client from './client';

export const get = (url: string) => client.get(url).then(res => res.data.data)

export const paginationGet = (url: string) => client.get(url).then(res => res.data)

export const post = (url: string, body?: any, config?: RawAxiosRequestConfig<any>) => client.post(url, body, config).then(res => res.data.data)

export const destroy = (url: string) => client.delete(url)