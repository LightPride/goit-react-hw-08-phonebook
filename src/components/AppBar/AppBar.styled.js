import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
  top: 0;
  left: 0;
  z-index: 1100;
  min-height: 50px;
  position: sticky;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
