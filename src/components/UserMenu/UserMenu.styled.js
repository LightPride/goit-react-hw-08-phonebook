import styled from '@emotion/styled';

export const NickName = styled.p`
  color: white;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${p => p.theme.colors.white};
  padding: 5px 10px 5px;

  background: rgba(0, 0, 0, 0.3);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow: ${p => p.theme.boxShadow.boxShadow};
  margin-left: 15px;
  :focus,
  :hover {
    color: ${p => p.theme.colors.orangered};
    box-shadow: ${p => p.theme.boxShadow.boxShadow};
  }
`;
