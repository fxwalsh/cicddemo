import axios from 'axios';
import config from './../config';

export const upvote = postId => {
  return axios.post(`${config.serverUrl}/api/posts/${postId}/upvote`)
              .then(resp => resp.data);
};

export const getAll = () => {
   return axios(`${config.serverUrl}/api/posts`)
              .then(resp => resp.data);
};

export const getPost = postId => {
  return axios.get(`${config.serverUrl}/api/posts/${postId}`)
              .then(resp => resp.data);
};

export const add = (newTitle, newLink) => {
  return axios.post(`${config.serverUrl}/api/posts`, { title: newTitle, link: newLink })
              .then(resp => resp.data);
};
