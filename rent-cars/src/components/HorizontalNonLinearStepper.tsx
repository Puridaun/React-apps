import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";

const steps = ["Select car", "Select car features", "Complete reservation"];

interface HorizontalNonLinearStepperProps {
  currentStep?: number;
  completedSteps?: number[];
  onStepClick?: (step: number) => void;
}

const HorizontalNonLinearStepper: React.FC<HorizontalNonLinearStepperProps> = ({
  currentStep = 0,
  completedSteps = [],
  onStepClick,
}) => {
  const [activeStep, setActiveStep] = React.useState(currentStep);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>(() => {
    // Initialize completed state based on completedSteps prop
    const initialCompleted: { [k: number]: boolean } = {};
    completedSteps.forEach((step) => {
      initialCompleted[step] = true;
    });
    return initialCompleted;
  });

  // Update local state when props change
  React.useEffect(() => {
    setActiveStep(currentStep);
  }, [currentStep]);

  React.useEffect(() => {
    const newCompleted: { [k: number]: boolean } = {};
    completedSteps.forEach((step) => {
      newCompleted[step] = true;
    });
    setCompleted(newCompleted);
  }, [completedSteps]);

  const handleStep = (step: number) => () => {
    setActiveStep(step);
    if (onStepClick) {
      onStepClick(step);
    }
  };

  return (
    <Box sx={{ width: "100%", mb: 4 }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton
              color="inherit"
              onClick={handleStep(index)}
              disabled={index > activeStep + 1} // Prevent skipping too far ahead
            >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default HorizontalNonLinearStepper;
