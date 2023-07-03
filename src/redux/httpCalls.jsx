import axiosInstance from "../helpers/axiosInstance";

export async function getAuctions(params) {
    try {
      const res = await axiosInstance.get('/auctions/', {
        params,
      });
      return res;
    } catch (err) {
      return err;
    }
}