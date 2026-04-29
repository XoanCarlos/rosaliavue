import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// listar GET
export const getTarefas = async () => {
  return await axios.get(`${API_URL}/tarefas`);
};

// alta POST
export const createTarefa = async (tarefa) => {
  return await axios.post(`${API_URL}/tarefas`, tarefa);
};

// update PUT
export const updateTarefa = async (id, tarefa) => {
  return await axios.patch(`${API_URL}/tarefas/${id}`, tarefa);
};