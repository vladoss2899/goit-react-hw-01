import "./Profile.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className="profile">
      <div className="information">
        <img src={image} alt="User avatar" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li className="items">
          <span>Followers</span>
          <span className="itemsinformation">{followers}</span>
        </li>
        <li className="items">
          <span>Views</span>
          <span className="itemsinformation">{views}</span>
        </li>
        <li className="items">
          <span>Likes</span>
          <span className="itemsinformation">{likes}</span>
        </li>
      </ul>
    </div>
  );
}
