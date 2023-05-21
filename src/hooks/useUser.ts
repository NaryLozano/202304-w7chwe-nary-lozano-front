import axios from "axios";

interface UserData {
  username: string;
  password: string;
}

const useUser = () => {
  const apiURL = import.meta.env.VITE_API_URL;

  const getUserToken = async (userData: UserData): Promise<string> => {
    const {
      data: { token },
    } = await axios.post<{ token: string }>(`${apiURL}/login`, userData);

    return token;
  };
  return { getUserToken };
};

export default useUser;
