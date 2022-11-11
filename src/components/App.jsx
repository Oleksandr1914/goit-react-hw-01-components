import Profile from "./profileCard/Profile";
import user from "../json/user.json"
import Statistics from "./statisticsCard/Statistics";
import data from "../json/data.json"
import Friends from "./friendsCard/Friends"
import friends from "../json/friends.json"
import TransactionHistory from "./TransactionHistoryCard/TransactionHistory"
import transactions from "../json/transactions.json"

export const App = () => {
  return (
    <div>
    <Profile username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions}/>
      </div>
  )
};