import axios from "./instance";

export const api = {
  // GET
  get: async <T>(url: string, config = {}): Promise<T> => {
    const res = await axios.get<T>(url, config);
    return res.data;
  },

  // POST
  post: async <T>(url: string, data?: any, config = {}): Promise<T> => {
    const res = await axios.post<T>(url, data, config);
    return res.data;
  },

  // PUT
  put: async <T>(url: string, data?: any, config = {}): Promise<T> => {
    const res = await axios.put<T>(url, data, config);
    return res.data;
  },

  // PATCH
  patch: async <T>(url: string, data?: any, config = {}): Promise<T> => {
    const res = await axios.patch<T>(url, data, config);
    return res.data;
  },

  // DELETE
  delete: async <T>(url: string, config = {}): Promise<T> => {
    const res = await axios.delete<T>(url, config);
    return res.data;
  },
};
