import axios from 'axios';
import qs from 'query-string';

interface OAuthReqData {
  code: string;
  client_id: string;
  client_secret: string;
  redirect_uri: string;
  grant_type: string;
}

interface GetBalanceParams {
  bank_tran_id: string;
  fintech_use_num: string | null;
  tran_dtime: string;
}

interface GetTransactionListParams {
  bank_tran_id: string;
  fintech_use_num: string | null;
  inquiry_type: string;
  inquiry_base: string;
  from_date: string;
  to_date: string;
  sort_order: string;
  tran_dtime: string;
}

export const apiOAuth = {
  postOAuthCode: async (OAuthReqBody: OAuthReqData) => {
    const response = await axios.post(`/oauth/2.0/token`, qs.stringify(OAuthReqBody), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response;
  },
  getMyInfo: async () => {
    const response = await axios.get(`/v2.0/user/me`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAwMDM0NzM2Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIiwidHJhbnNmZXIiXSwiaXNzIjoiaHR0cHM6Ly93d3cub3BlbmJhbmtpbmcub3Iua3IiLCJleHAiOjE3MDI0MzE5NDYsImp0aSI6ImRlNGRlNmEyLTIxNmItNGIyNi04YjA4LThlMDVkYmQwMzU0MyJ9.BirXtT1V5AmgZC3SuTAOj-E0TuTcFsrdVco0gR6FlsA',
      },
      params: {
        user_seq_no: '1100034736',
      },
    });
    return response;
  },
  getBalance: async (params: GetBalanceParams) => {
    const response = await axios.get(`/v2.0/account/balance/fin_num`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAwMDM0NzM2Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIiwidHJhbnNmZXIiXSwiaXNzIjoiaHR0cHM6Ly93d3cub3BlbmJhbmtpbmcub3Iua3IiLCJleHAiOjE3MDI0MzE5NDYsImp0aSI6ImRlNGRlNmEyLTIxNmItNGIyNi04YjA4LThlMDVkYmQwMzU0MyJ9.BirXtT1V5AmgZC3SuTAOj-E0TuTcFsrdVco0gR6FlsA',
      },
      params,
    });
    return response;
  },
  getTransactionList: async (params: GetTransactionListParams) => {
    // const accessToken = localStorage.getItem('accessToken');
    const response = await axios.get(`/v2.0/account/transaction_list/fin_num`, {
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAwMDM0NzM2Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIiwidHJhbnNmZXIiXSwiaXNzIjoiaHR0cHM6Ly93d3cub3BlbmJhbmtpbmcub3Iua3IiLCJleHAiOjE3MDI0MzE5NDYsImp0aSI6ImRlNGRlNmEyLTIxNmItNGIyNi04YjA4LThlMDVkYmQwMzU0MyJ9.BirXtT1V5AmgZC3SuTAOj-E0TuTcFsrdVco0gR6FlsA',
      },
      params,
    });
    return response;
  },
};
