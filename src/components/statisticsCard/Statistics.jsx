import css from "./statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ stats, title } ) => {
    return (<section className={css.statistics} key={stats[0].id}>
        {stats[0].title ? <h2 className={css.title}>stats[0].title</h2> : <h2 className={css.title}>{title}</h2> }

  <ul className={css.statList}>
    <li className={css.item}>
    <span className={css.label}>{stats[0].label }</span>
      <span className={css.percentage}>{stats[0].percentage }%</span>
    </li>
            <li className={ css.red}>
      <span className={css.label}>{stats[1].label }</span>
      <span className={css.percentage}>{stats[1].percentage }%</span>
    </li>
    <li className={css.green}>
      <span className={css.label}>{stats[2].label }</span>
      <span className={css.percentage}>{stats[2].percentage }%</span>
    </li>
    <li className={css.yellow}>
      <span className={css.label}>{stats[3].label }</span>
      <span className={css.percentage}>{stats[3].percentage }%</span>
    </li>
  </ul>
</section>)
}

Statistics.propTypes = {
    stats: PropTypes.array,
    title: PropTypes.string
}
export default Statistics;