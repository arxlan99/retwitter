import api from './base';

// tweets
export const getTweets = async () => {
  const response = await api.get('/tweets');
  return response.data;
};

export const getTweet = async (id: string) => {
  const response = await api.get(`/tweets/${id}`);
  return response.data;
};

export const createTweet = async (data: any) => {
  const response = await api.post('/tweets', data);
  return response.data;
};

export const likeTweet = async (id: string) => {
  const response = await api.post(`/tweets/${id}/like`);
  return response.data;
};

// auth apis
export const login = async (data: any) => {
  const response = await api.post('/auth/login', data, {
    withCredentials: true,
  });
  return response.data;
};

export const register = async (data: any) => {
  const response = await api.post('/auth/signup', data);
  return response.data;
};

export const logout = async () => {
  const response = await api.post('/auth/logout');
  return response.data;
};

export const getAuthUser = async () => {
  const response = await api.get('/auth/me');
  return response.data;
};

export const getAuthMe = async () => {
  const response = await api.get('/auth/me');
  return response.data;
};

// user
export const getUser = async (id: string) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};
