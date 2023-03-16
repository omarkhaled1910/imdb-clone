import styled from "styled-components";

export const Container = styled.div<{
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  paddingBlock?: string;
  border?: string;
  width?: string;

  smallScreenFlip?: boolean;
}>`
  width: ${({ width }) => width};
  display: flex;
  align-items: ${({ alignItems }) => alignItems || "center"};
  gap: ${({ gap }) => gap || "10px"};
  /* height: 35px; */
  padding-block: ${({ paddingBlock }) => paddingBlock || 10};
  justify-content: ${({ justifyContent }) => justifyContent || "start"};
  border: ${({ border }) => `${border} !important`};
  @media only screen and (max-width: 1000px) {
    flex-direction: ${({ smallScreenFlip }) =>
      `${smallScreenFlip && "column"}`};
  }
`;
export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
