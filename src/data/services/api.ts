import axios from 'axios';

const API_URL = 'https://zsy3uszrj7.execute-api.us-east-1.amazonaws.com/v1/process';

export const getProcesses = async () => {
  const response = await axios.get(API_URL);

  console.log('response', response)
  return response.data;
};

export const createProcess = async (process: any) => {
  const response = await axios.post(API_URL, process);
  return response.data;
};

export const updateProcess = async (id: string, process: any) => {
  const response = await axios.put(`${API_URL}/${id}`, process);
  return response.data;
};

export const deleteProcess = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
