import styled from 'styled-components'

export const S = {
  Container: styled.div`
    text-align: center;
    width: max(1000px, 80%);
    min-height: calc(100vh - 35px - 40px - 42px);
    margin: 20px auto;
    box-sizing: border-box;
    @media (max-width: 1000px) {
      width: max(600px, 80%);
    }
    @media (max-width: 600px) {
      width: 80%;
    }
  `,
  Form: styled.form`
    width: 325px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    position: relative;
    button {
      width: 55px;
      text-align: center;
    }
  `,
  FormLabel: styled.label`
    display: inline-flex;
    margin-right: 16px;
    input {
      margin-right: 8px;
      margin-left: 8px;
    }
    @media (max-width: 600px) {
      margin-right: 24px;
    }
  `,
  Loading: styled.div`
    width: 22px;
    height: 22px;
    position: absolute;
    top: 0;
    right: 20%;
    img {
      width: 100%;
    }
    @media (max-width: 600px) {
      right: 15%;
    }
    @media (max-width: 401px) {
      right: 20%;
    }
  `,
  Grid: styled.div`
    margin-top: 16px;
    margin-bottom: 16px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 16px;
    @media (max-width: 1000px) {
      grid-template-columns: repeat(2, auto);
    }
    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `,
  GridItem: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}

const ACSItem = styled.div`
  text-align: left;
  font-size: 12px;
  padding: 4px;
  cursor: pointer;
  background-color: #fff;
  border-bottom: 1px solid #d4d4d4;
  &:hover {
    background-color: #e9e9e9;
  }
`

export const ACS = {
  Wrapper: styled.div`
    position: relative;
    display: inline-block;
  `,

  List: styled.div`
    position: absolute;
    border: 1px solid #d4d4d4;
    border-bottom: none;
    border-top: none;
    z-index: 99;
    top: 100%;
    left: 0;
    right: 0;
    width: 147px;
    margin-left: 8px;
    margin-right: 8px;
  `,
  Item: ACSItem,
  ActiveItem: styled(ACSItem)`
    background-color: DodgerBlue !important;
    color: #ffffff;
  `,

  Text: styled.span`
    pointer-events: none;
  `,
}
