import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

export const Container = styled.div<{ width?: string }>`
  width: ${(props) => props.width};
  max-width: 90%;
  padding: 1rem;
  margin: 1rem auto;
  background: rgb(164 164 164 / 25%);
  border: 1px solid #fdfdfd73;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  box-shadow: 2px 4px 9px 1px rgb(0 0 0 / 17%);
`;

export const Input = styled.input`
  margin: 1rem;
  width: 600px;
  max-width: 85%;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: rgb(164 164 164 / 25%);
  border: 1px solid #fdfdfd73;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  box-shadow: 2px 4px 9px 1px rgb(0 0 0 / 17%);
  outline: none;
  color: black;
  &:focus {
    border-color: black;
  }

  &::-webkit-input-placeholder {
    color: #000;
  }
`;

export const Hr = styled.hr`
  width: calc(100% - 2rem);
  margin: 0 1rem;
  border-color: rgb(253 253 253 / 51%);
`;

export const Label = styled.label`
  margin-left: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

export const Button = styled.button<{ Color?: string; primary?: boolean }>`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${(props) => (!props.primary ? "#d0d0d0" : props.Color)};
  color: ${(props) => (props.primary ? "#fff" : props.Color)};
  border: 1px solid;
  border-color: ${(props) => props.Color};
  font-weight: 500;
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;
  transition: transform 0.5s cubic-bezier(0.65, 0.13, 0.11, 1.38);
  &:hover {
    transform: scale(1.1);
  }
`;

export const Error = styled.div`
  color: #c90a0a;
  margin: 1rem;
`;
