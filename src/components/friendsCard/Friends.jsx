import FriendListItem from "./FriendListItem"
import PropTypes from "prop-types";
import css from "./Friends.module.css";

const Friends = ({ friends }) => {
   return (<ul className={css.friendList}>
       {friends.map(el => <FriendListItem
            key={el.id}
                avatar={el.avatar}
                name={el.name}
                isOnline={el.isOnline}
            />
        )}
</ul>)
}

Friends.propTypes = {
    friends: PropTypes.array
}

export default Friends;