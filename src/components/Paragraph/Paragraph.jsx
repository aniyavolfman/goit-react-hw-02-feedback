import PropTypes from 'prop-types';

export function Paragraph({ text, number }) {
  return (
    <p>
      {text}
      <span>{number}</span>
      {text === 'Positive feedback:' && <span>%</span>}
    </p>
  );
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
