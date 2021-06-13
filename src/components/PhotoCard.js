import { Comments } from './Comments'
import { ShareLike } from './ShareLike'


export function PhotoCard({ feed }) {
  return (
    <div className="flex flex-col max-w-lg p-4 space-y-2 overflow-hidden rounded-lg shadow-md bg-coolGray-50 text-coolGray-800">
      
      <div className="flex space-x-4">
        <img
          alt="profile pic"
          src={feed.user.profilePic}
          className="object-cover w-12 h-12 rounded-full shadow"
        />
        <div className="flex flex-col space-y-1">
          <a href="user" className="text-sm font-semibold">
            {feed.user.username}
          </a>
          <span className="text-xs text-coolGray-600">
              {Date(feed.postedAt)}
          </span>
        </div>
      </div>
      <div>
        <img
          src={feed.content.source}
          className="object-cover w-full mb-4 h-60 sm:h-96"
          alt="intro"
        />
        <h2 className="mb-1 text-xl font-semibold">{feed.description}</h2>
      </div>
      <Comments postId={feed.id} />
      <ShareLike />
    </div>
  );
}
