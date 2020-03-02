import styled from "styled-components";

export const InnerPage = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;

  header {
    background-color: #e6e6e6;
    padding: 20px 0;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    h1 {
      font-size: 2rem;
      color: #116193;
    }

    span {
      color: #555555;
      font-weight: 300;
    }
  }

  iframe {
    width: 100%;
    height: 500px;
  }
`;

export const MovieDetails = styled.article`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
  }

  div {
    flex-grow: 3;
    flex-direction: column;
    align-items: inherit;
    justify-content: flex-start;
    @media (min-width: 320px) and (max-width: 767px) {
      order: 3;
    }

    div {
      padding: 20px 0;

      h2 {
        padding-bottom: 10px;
        margin-bottom: 20px;
        color: #116193;
        font-size: 1.2rem;
        border-bottom: 2px solid #00e8e4;
      }

      span {
        color: #555555;
        font-weight: 500;

        li {
          list-style: none;
        }
      }

      .infos {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding: 0;
        @media (min-width: 320px) and (max-width: 767px) {
          flex-direction: column;
        }

        div {
          h3 {
            font-size: 1.2rem;
            color: #116193;
          }
        }
      }
    }
  }

  figure {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    @media (min-width: 320px) and (max-width: 767px) {
      order: 1;
    }

    img {
      min-width: 350px;
      width: 100%;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media (min-width: 320px) and (max-width: 767px) {
      align-items: center;
      order: 3;
    }

    .vote-average {
      background-color: #116193;
      border-radius: 100%;
      min-width: 120px;
      min-height: 120px;
      max-width: 120px;
      max-height: 120px;
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
      font-size: 2rem;
      font-weight: 400;
      border: 5px solid #00e8e4;
      margin-right: 20px;
      @media (min-width: 320px) and (max-width: 767px) {
        min-width: 80px;
        min-height: 80px;
        max-width: 80px;
        max-height: 80px;
        font-size: 1.5rem;
      }
    }
  }
`;

export const Genres = styled.ul`
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }

  li {
    background-color: #fff;
    padding: 5px 10px;
    border: 1px solid #116193;
    color: #116193;
    border-radius: 20px;
    margin-right: 10px;
    margin-bottom: 10px;
    list-style: none;
  }
`;

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;
