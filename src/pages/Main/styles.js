import styled from "styled-components";

export const Search = styled.form`
  display: flex;
  justify-content: center;
  margin: 40px 0;

  input {
    background-color: #ebebeb;
    width: 100%;
    padding: 15px 20px;
    border-radius: 20px;
    border: 0;
    outline: 0;
  }
`;

export const MovieItem = styled.section`
  background-color: #ebebeb;
  margin-bottom: 30px;
  display: flex;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
  }

  img {
    min-width: 250px;
    width: 250px;
    @media (min-width: 320px) and (max-width: 767px) {
      min-width: 250px;
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
`;

export const Title = styled.header`
  display: flex;
  flex-direction: column;

  h2 {
    background-color: #116193;
    padding: 20px 20px 5px;
    width: 100%;

    a {
      font-size: 2rem;
      color: #00e8e4;
      margin-left: 80px;
      text-decoration: none;
      @media (min-width: 320px) and (max-width: 767px) {
        font-size: 1rem;
      }
    }
  }
`;

export const Info = styled.div`
  display: flex;
  margin-left: 20px;

  div {
    background-color: #116193;
    border-radius: 100%;
    width: 60px;
    height: 60px;
    min-width: 60px;
    min-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #00e8e4;
    font-size: 1rem;
    font-weight: 400;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    border: 5px solid #00e8e4;
    margin-right: 20px;
  }

  span {
    color: #555555;
    font-weight: 300;
  }
`;

export const Description = styled.article`
  padding: 10px 30px;

  p {
    color: #555555;
  }
`;

export const Paginate = styled.div`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      margin: 10px;

      a {
        cursor: pointer;
      }
    }

    .page-item.active {
      background-color: #116193;
      border-radius: 100%;
      min-width: 50px;
      min-height: 50px;
      max-width: 50px;
      max-height: 50px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      color: #00e8e4;
      font-size: 1rem;
      font-weight: 400;
      border: 5px solid #00e8e4;
      margin-right: 20px;
    }
  }
`;
