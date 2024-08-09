"use client";
import { StyledAuthText, StyledHighlightText } from "./auth.styles";

interface IAuthTextProps {
  text: string;
  highlightedText: string;
  handleClick?: () => void;
}

const AuthText: React.FC<IAuthTextProps> = (props) => {
  const { text, highlightedText, handleClick } = props;
  return (
    <StyledAuthText>
      {text}{" "}
      <StyledHighlightText variant="body2" onClick={handleClick}>
        {highlightedText}
      </StyledHighlightText>
    </StyledAuthText>
  );
};

export default AuthText;
