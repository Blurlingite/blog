// This file pre-configures "axios" to have a baseURL (and an API key would go here too if we needed one)
import axios from "axios";

export default axios.create({
  // We don't include '/posts' b/c we want the baseURL to end in '.com' so we can append '/posts' or '/users', etc. to make the baseURL more reusable
  baseURL: "https://jsonplaceholder.typicode.com/"
});
