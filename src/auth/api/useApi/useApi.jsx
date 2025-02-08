import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function useApi(url, queryKey) {
  function getData() {
    return axios.get(url);
  }
  const res = useQuery({
    queryKey,
    queryFn: getData,
  });

  return res;
}
