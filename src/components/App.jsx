import React, { Component } from 'react';
import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { Button } from './Button/Button';
import { Paragraph } from './Paragraph/Paragraph';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  handleButtonNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  handleButtonBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return Number(this.state.good) + Number(this.state.neutral) + Number(this.state.bad);
  }

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback()) {
      return Math.round((Number(this.state.good) / this.countTotalFeedback()) * 100);
    } else {return 0};
  }
  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <Button text="Good" onButton={this.handleButtonGood} />
          <Button text="Neutral" onButton={this.handleButtonNeutral} />
          <Button text="Bad" onButton={this.handleButtonBad} />
        </Section>
        <Section title="Statistics">
          <Paragraph text="Good:" number={this.state.good} />
          <Paragraph text="Neutral:" number={this.state.neutral} />
          <Paragraph text="Bad:" number={this.state.bad} />
          <Paragraph text="Total:" number={this.countTotalFeedback()} />
          <Paragraph
            text="Positive feedback:"
            number={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Container>
    );
  }
}
