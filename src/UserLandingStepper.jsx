import React from 'react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';

/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class UserLandingStepper extends React.Component {
  state = {
    finished: true,
    stepIndex: 0
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return "You're a long way from home sonny jim!";
    }
  }

  render() {
    const { stepIndex } = this.state;

    return (
      <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
        <Stepper activeStep={stepIndex + 2}>
          <Step>
            <StepLabel>Fyll i kontouppgifter</StepLabel>
          </Step>
          <Step>
            <StepLabel>Välj dator och telefon</StepLabel>
          </Step>
          <Step>
            <StepLabel>Ladda upp konsultprofil </StepLabel>
          </Step>
        </Stepper>
      </div>
    );
  }
}

export default UserLandingStepper;
