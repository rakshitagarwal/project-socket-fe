import io from "socket.io-client";
const BASE_URL = process.env.NEXT_PUBLIC_ENV_BASE_PATH + "/v1";
import storage from "./storage";

const socketService = (() => {
  let socket = null;

  return {
    init: () => {
      const token = storage.getToken();
      console.log("init clled");
      if (token) {
        console.log(`${process.env.NEXT_PUBLIC_ENV_BASE_PATH}/v1`);
        socket = io(`${process.env.NEXT_PUBLIC_ENV_BASE_PATH}/v1`, {
          extraHeaders: {
            accesstoken: token,
          },

          transports: ["websocket", "polling"],
        });
        console.log(socket);
      } else {
        console.log("Socket is not connected");
      }
    },
    on: (eventName, callback) => {
      console.log(eventName, "++++++++++++++++", callback);
      socket.off(eventName).on(eventName, callback);
    },
    emit: (str, payload) => {
      console.log("payload: ", payload);
      socket.emit(str, payload);
    },
  };
})();

socketService.init();
export default socketService;
