import { useQuery } from "@tanstack/react-query";
import { getAllTweets } from "../../api/tweet.ts";

function TweetTable() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["tweets"],
    queryFn: getAllTweets,
  });
  console.log(data);

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>loading failed: {(error as Error).message}</div>;

  return (
    <div className="space-y-4">
      {data?.data?.map((tweet) => (
        <div key={tweet.id} className="p-4 border rounded">
          <p>{tweet.content}</p>
          <p className="text-gray-500 text-sm">by {tweet.userId}</p>
        </div>
      ))}
    </div>
  );
}

export default TweetTable;
