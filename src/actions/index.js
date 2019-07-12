// We use this to have access to the baseURL in jsonPlaceholder.js to be used with the jsonPlaceholder API
import jsonPlaceholder from "../apis/jsonPlaceholder";

// marked as "async" b/c we are making a request
export const fetchPosts = async () => {
  // according to the documentation at https://jsonplaceholder.typicode.com,
  // we need to access the posts with '/posts' at the end of the URL. So we use the get() to append '/posts' to the baseURL https://jsonplaceholder.typicode.com/ we got from the jsonPlaceholder import above
  // This will be the response we get so we assign it to a const called 'response
  const response = await jsonPlaceholder.get("/posts");

  return { type: "FETCH_POSTS", payload: response };
};
