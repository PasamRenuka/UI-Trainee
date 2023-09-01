import axios from "axios";
import { API_REQUEST, API_SUCCESS, API_ERROR } from "./type";
export const apiReponse = () => {
  return {
    type: API_REQUEST,
  };
};
export const Success = (data) => {
  return {
    type: API_SUCCESS,
    payload: data,
  };
};
export const Error = (err) => {
  return {
    type: API_ERROR,
    payload: err,
  };
};
const auth_token =
  "eyJhbGciOiJFUzI1NiJ9.eyJzZXNzaW9uX2tleSI6ImUzQ2dqL0wrTVhjOTFSTHMzb3F5S1NRcTl2SWdvN29vWU02VFRHRnl1NGxZNFlPRVYrelplNUE3d2V5SVNZeGVyOE9qRVpYYUtnUlByTCs5IiwiZXhwaXJlc19hdCI6IjIwMjMtMDktMTAgMDc6Mjk6MzYgVVRDIiwiYWRtaW5faWQiOjQ5NX0.xjEzQJlzZpJWHujORbgvac6hrx0KIdg3tDqZg5Y63IQ9wNXlzEArzX2N0d92Gk7vGVXnQevJf1QA5GlZ414eqw";
const page_token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyYW5kb21WYWx1ZSI6Mjg5MDk3NTgwMH0.qiGcJWHaTguelRHXZV59IV4McYGAY1LdXS_EL3FlWRs";
const URL =
  "https://api.devtest.experience.com/v2/ipro/accounts/1892/users?limit=10&page=1";
export const requestApi = () => {
  return async (dispatch) => {
    dispatch(apiReponse());
    try {
      const response = await axios.get(URL, {
        headers: {
          Authorization: auth_token,
          "Page-Token": page_token,
        },
      });
      const responseData = response?.data;
      dispatch(Success(responseData));
    } catch (error) {
      const err = error?.message;
      dispatch(Error(err));
    }
  };
};
