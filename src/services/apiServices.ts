import axios from "axios";

interface Axios {
    method: string; 
    url: string; 
    data?: object;
    headers?: object;
}

const apiRequest = async ({ method = "GET", url = "", payload = null, headers = {} }) => {
  try {
    let axiosObj: Axios = {
        method,
        url,
        headers: {
            'Content-Type': 'application/json',
        },
    }
    if (payload) {
        axiosObj.data = payload;
    }
    if (headers) {
        axiosObj.headers = headers;
    }
    const response = await axios(axiosObj);
    
    return response.data;
  } catch (error: any) {
    console.error("API Request Error:", error.response?.data || error.message);
    throw error;
  }
};

export default apiRequest;
