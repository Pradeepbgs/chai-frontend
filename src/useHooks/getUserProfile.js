import { addUser } from "../utils/userSlice";
import axios from "axios";

const getUserprofile = async (dispatch, username) => {
    try {
      const res = await axios.get(
        `https://video-backend-3ot2.onrender.com/api/v1/users/c/${username}`,
        { withCredentials: true }
      );
      if (res) {
        dispatch(addUser(res.data.data));
        return res;
      }
    } catch (error) {
      console.log(error);
    }
  };

  export default getUserprofile;