import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContent = styled.div`
  background-color: #1c1a19;

  display: flex;
  justify-content: space-between;
  padding: 20px 50px 20px 30px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const LogoContainer = styled.div``;

export const NavigationButton = styled(Link)`
  text-decoration: none;
  line-height: 25px;

  background-color: inherit;
  color: white;

  &:hover,
  &focus {
    color: #fdbf5a;
  }

  border: 0;
  border-radius: 4px;

  font-weight: 500;
  font-size: 21px;

  margin: 4px;
`;
