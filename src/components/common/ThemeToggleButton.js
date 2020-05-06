import styled, { withTheme } from "styled-components";
import media from "styled-media-query";
import { Dark, Light } from "../utillity/Icons";

const Button = styled.div`
  background: white;

  width: 72px;
  height: 36px;
  border-radius: 18px;
  border: 2px solid ${(props) => props.theme.bodyText};
  
  ${media.lessThan("medium")`
    width: 56px;
    height: 28px;
    border-width: 1.5px;
  `}

  ${media.lessThan("small")`
    width: 48px;
    height: 24px;
  `}
  
  ${(props) => props.right ? `
    position: absolute;
    right: 0;
    margin-top: 3rem;
    margin-right: 3rem;
  ` : ''}
`;
const Circle = styled.div`
  background ${(props) => props.theme.body};
  float: ${(props) => props.theme.name === 'dark' ? 'right' : 'left'};

  margin: 2px;
  padding: 4px;
  width: 28px;
  height: 28px;
  border-radius: 14px;
  border: 2px solid black;

  ${media.lessThan("medium")`
    margin: 2.5px;
    padding: 2px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border-width: 1.5px;
  `}

  ${media.lessThan("small")`
    padding: 1px;
    width: 16px;
    height: 16px;
    border-radius: 8px;
  `}

  svg {
    width: 100%;
    height: 100%;
  }
`

const ThemeToggleButton = (props) => {
  return <Button {...props}>
          <Circle>{ props.theme.name === 'dark' ? <Dark /> : <Light /> }</Circle>
        </Button>
}

export default withTheme(ThemeToggleButton);