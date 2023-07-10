import { Component } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

class Filter extends Component {
// state = {
//     contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
//     filter: '',
//     name: '',
//     number: ''
//   }

  handleChange = event => {
    const {value} = event.target;
    this.props.onFilterChange(value);
  }

render() {
  return (
    <div className={css.filter}>
    <label htmlFor='filter'>Please type a name</label>
    <input
      type="text"
      name="filter"
      value={this.props.filter}
      onChange={this.handleChange}
      placeholder="Search for contacts"
    />
    </div>
  );
};
}

Filter.propTypes = {
    onFilterChange: PropTypes.func,
    filter: PropTypes.string,
}

export default Filter;
