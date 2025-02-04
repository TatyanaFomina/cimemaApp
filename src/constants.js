export const BASE_URL = "http://subdomain.entony.fs.a-level.com.ua/api/";
export const URL_MOVIES = `${BASE_URL}movie/`;
export const URL_SCHEDULE = `${URL_MOVIES}session/`;
export const URL_ROOMS = `${URL_MOVIES}room/`;
export const URL_TICKETS = `${URL_MOVIES}space-shadow`;

export const SET_MOVIES = "SET_MOVIES";
export const IS_LOADING = "IS_LOADING";
export const LOADING_FAIL = "LOADING_FAIL";

export const SET_SESSIONS = "SET_SESSIONS";
export const SET_ROOMS = "SET_ROOMS";

export const DATE_OPTIONS = {
    month: 'long',
    day: 'numeric',
}