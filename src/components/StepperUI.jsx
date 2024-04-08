import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: "It's not as easy 1-2-3.",
    description: `The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know(and nothing else).`,
  },
  {
    label: 'Old habits are hard to break.',
    description:
      'And bad behaviors die hard. Fortunately,we give you great,science-backed techniques to use.',
  },
  {
    label: "You and your motivation don't have a long-term relationship.",
    description: `Luckily, we can proactively prepare you for the marathon,not just the race. Effective, memorable excercise will help you stick to your goals.`,
  },
  {
    label: "Books just don't offer practical solutions.",
    description: `Remember when you learned to ride a bike just by reading? Yeah we don't either.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption"></Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
          </Box>
  );
}
