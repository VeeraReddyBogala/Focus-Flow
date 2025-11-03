import api from "./api";

export const registerUser = (userData) => api.post("/auth/register", userData);
export const loginUser = (credentials) => api.post("/auth/login", credentials);

export const fetchTasks = () => api.get("/tasks");
export const createTask = (taskData) => api.post("/tasks", taskData);
export const updateTask = (id, updates) => api.put(`/tasks/${id}`, updates);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);
