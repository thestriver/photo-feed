import { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";

import { Comment } from "../models";

export function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getComments = async () => {
      const photoComments = await DataStore.query(
        Comment,
        (p) => p.timelinefeedID === postId
      );
      setComments(photoComments);
    };
    getComments();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} className="flex">
          <div key={comment.id} className="flex-auto p-1">
            <div className="flex flex-wrap">
              <p className="flex-auto text-base font-semibold">
                {comment.user.username}
              </p>
              <div className="text-sm font-semibold text-gray-500">
                {comment.body}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
