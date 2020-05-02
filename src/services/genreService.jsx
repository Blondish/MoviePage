import http from "./httpFile";
import { apiURL } from "../config.json";

export function getGenres() {
  return http.get(apiURL + "/genres");
}
