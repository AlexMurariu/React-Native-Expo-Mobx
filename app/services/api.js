import apisauce from "apisauce";
import apiCalls, { apiCallNames } from "./apiCalls";

/* 
  If you use your device run adb reverse tcp:server_port tcp:server_port also use localhost:server_port 
  If you use android studio emulator use 10.0.2.2:server_port
*/

const create = (baseURL = "http://localhost:2201") => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {},
    // 10 second timeout...
    timeout: 10240
  });

  const calls = Object.keys(apiCalls).map(getApiCalls =>
    apiCalls[getApiCalls](api)
  );

  return {
    ...calls.reduce((a, b) => ({ ...a, ...b }))
  };
};

export default {
  create,
  callNames: apiCallNames
};
