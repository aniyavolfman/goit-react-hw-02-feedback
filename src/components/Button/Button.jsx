import PropTypes from 'prop-types';

export function Button({ text, onButton }) {
  return (
    <button type="button" onClick={onButton}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onButton: PropTypes.func.isRequired,
};
