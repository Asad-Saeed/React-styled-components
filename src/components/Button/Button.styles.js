import styled, { keyframes } from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #4caf50;
  /* through props */
  background-color: ${(props) =>
    props.variant === "outline" ? "#FFF" : "#4caf50"};
  color: ${(props) => (props.variant === "outline" ? "#4caf50" : "#FFF")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  /* Pseudo classes */
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#FFF" : "#4caf50"};
    color: ${(props) => (props.variant !== "outline" ? "#4caf50" : "#FFF")};
  }
`;

// Function to style again or override
export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;

// override and style again on the base of attributes
export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  box-shadow: 0 9px #999;
  /* Pseudo classes */
  &:active {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#FFF" : "#4caf50"};
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

// Animation using keyframes in styled components
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  /* taking rotate value using as variable */
  animation: ${rotate} infinite 20s linear;
`;


// Theming in styled components 

export const DarkButton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`;
