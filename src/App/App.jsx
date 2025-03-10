import Profile from "../components/Profile/Profile";
import userData from "../userData.json";
import FriendList from "../components/FriendList/FriendList";
import dataFriends from "../friends.json";
import transactions from "..//transactions.json";
import TransactionHistory from "..//components/TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={dataFriends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
