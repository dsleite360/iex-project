import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  small {
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 15px;
  }

  form {
    display: flex;
    flex-direction: row;

    input {
      font-weight: 500;
      background: #f0f0f0;
      width: 60%;
      border-radius: 6px;
      border: 0;
      padding: 12px 15px;
      margin-right: 10px;
    }

    button {
      border: 0;
      background: #9009de;
      color: #ffff;
      border-radius: 6px;
      font-weight: bold;
      padding: 10px 15px;
      transition: background 0.2s ease;

      &:hover {
        background: #7005ad;
      }
    }
  }
`;

export const FormError = styled.span`
  color: #fc032c;
  font-weight: bold;
  margin-top: 8px;
`;

export const SymbolInfo = styled.div`
  margin-top: 25px;

  ul {
    background: #ededed;
    font-size: 18px;
    margin-top: 10px;
    padding: 20px 30px;
    border-radius: 6px;

    list-style: none;
  }
`;

export const SymbolCards = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;

  span {
    background: #ededed;
    padding: 10px 15px;
    border-radius: 6px;

    & + span {
      margin-left: 10px;
    }

    ul {
      list-style: none;
    }
  }
`;
