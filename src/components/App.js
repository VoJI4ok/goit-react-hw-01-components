import { GlobalStyle } from "./GlobalStyles";

import { Profile } from './Profile/Profile'
import  user  from '../user.json'
import { Statistics } from './Statistics/Statistics'
import data from '../data.json'
import { FriendList } from "./FriendList/FriendList";
import friends from '../friends.json'
import { Transactions } from "./Transactions/Transactions";
import transactions from '../transactions.json'
export const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Profile username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
