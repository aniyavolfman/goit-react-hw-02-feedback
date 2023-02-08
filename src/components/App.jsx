import React, { Component } from 'react';
import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

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
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={[
              this.handleButtonGood,
              this.handleButtonNeutral,
              this.handleButtonBad,
            ]}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Container>
    );
  }
}
