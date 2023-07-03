import  io  from "socket.io-client";

const socket = io(`https://node.thebig.deals/v1`, { autoConnect: true });

export default socket;
