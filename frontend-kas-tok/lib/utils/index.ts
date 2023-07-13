import axios from "axios";

export const createUser = async (user: any) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/newuser`,
    user
  );
  return res;
};
