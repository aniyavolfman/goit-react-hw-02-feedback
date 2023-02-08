import PropTypes from 'prop-types';
import { Paragraph } from '../Paragraph/Paragraph';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <Paragraph text="Good:" number={good} />
      <Paragraph text="Neutral:" number={neutral} />
      <Paragraph text="Bad:" number={bad} />
      <Paragraph text="Total:" number={total} />
      <Paragraph
        text="Positive feedback:"
        number={positivePercentage}
      />
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};