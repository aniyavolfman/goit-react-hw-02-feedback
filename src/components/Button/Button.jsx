import PropTypes from 'prop-types';

export function Button({ text }) {
  return <button type="button">{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
