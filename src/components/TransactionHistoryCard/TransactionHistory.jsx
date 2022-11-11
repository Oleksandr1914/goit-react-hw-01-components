import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css"


const TransactionHistory = ({ items }) => {
    return (
    <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
    <tbody >
                {items.map((el, index) => {
                    if (index % 2 === 0) {
                        return (<tr className={css.trans} key={el.id}>
                        <td>{el.type}</td>
                        <td>{el.amount}</td>
                        <td>{el.currency}</td>
                    </tr>)
                    }
                    return (<tr key={el.id}>
                        <td>{el.type}</td>
                        <td>{el.amount}</td>
                        <td>{el.currency}</td>
                    </tr>)
                })}       
  </tbody>
</table>
)
}

TransactionHistory.propTypes = {
    items: PropTypes.array,
}

export default TransactionHistory;