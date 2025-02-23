import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend }) {
  const { avatar, name, isOnline } = friend;

  return (
    <div className={css.friendListItem}>
      <img src={avatar} alt={`Avatar of ${name}`} width="48" />
      <p className={css.friendName}>{name}</p>
      <p style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
