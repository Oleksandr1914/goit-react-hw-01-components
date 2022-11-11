import PropTypes from "prop-types";
import css from "./Friends.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (<li className={css.item} key={id}>
        <span className={isOnline ? css.status : css.stat }></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
</li>)
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.string
}

export default FriendListItem;