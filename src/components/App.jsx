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

 handleButton = event => {
        this.setState(prevState => {
          return { [event.target.name]: prevState[event.target.name] + 1 };
        });
  };


  countTotalFeedback = () => {
    return (
      Number(this.state.good) +
      Number(this.state.neutral) +
      Number(this.state.bad)
    );
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback()) {
      return Math.round(
        (Number(this.state.good) / this.countTotalFeedback()) * 100
      );
    } else {
      return 0;
    }
  };
  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleButton}
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
