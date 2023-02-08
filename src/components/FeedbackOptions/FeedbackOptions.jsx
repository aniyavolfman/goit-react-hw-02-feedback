import PropTypes from 'prop-types';
import { Button } from '../Button/Button';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <Button text={options[0]} onButton={onLeaveFeedback[0]} />
      <Button text={options[1]} onButton={onLeaveFeedback[1]} />
      <Button text={options[2]} onButton={onLeaveFeedback[2]} />
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.array.isRequired,
};
