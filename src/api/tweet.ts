import apiClient from "./axios.ts";
import type { ApiResponse } from "../types/api_response.ts";
import type { Tweet } from "../types/entity.ts";

export const getAllTweets = async (): Promise<ApiResponse<Tweet[]>> => {
  const response = await apiClient.get("tweets");
  return response.data;
};
