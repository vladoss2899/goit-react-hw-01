import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.information}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.items}>
          <span>Followers</span>
          <span className={css.itemsinformation}>{followers}</span>
        </li>
        <li className={css.items}>
          <span>Views</span>
          <span className={css.itemsinformation}>{views}</span>
        </li>
        <li className={css.items}>
          <span>Likes</span>
          <span className={css.itemsinformation}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
