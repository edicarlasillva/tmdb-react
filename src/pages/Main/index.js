import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Header from "../../components/Header/index";
import {
  Search,
  MovieItem,
  Content,
  Title,
  Info,
  Description,
  Paginate
} from "./styles";
import Container from "../../components/Container/index";
import api from "../../services/api";

export default class Main extends Component {
  state = {
    textQuery: "",
    movies: [],
    totalPages: 0
  };
  handleInputChange = e => {
    this.setState({ textQuery: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    // console.log(this.state.textQuery);

    const { textQuery, movies, page } = this.state;
    const response = await api.get(
      `/3/search/movie?api_key=08555db9f6be8fa06d4c47bc7e2d3335&query=${textQuery}&language=pt-BR&page=${page}`
    );
    this.setState({
      movies: response.data.results,
      totalPages: response.data.total_pages
      //textQuery: ""
    });

    console.log(movies);
  };

  handlePageChange = data => {
    const nextPage = data.selected + 1;
    const { textQuery, movies, page } = this.state;

    console.log(page);

    const response = api
      .get(
        `/3/search/movie?api_key=08555db9f6be8fa06d4c47bc7e2d3335&query=${textQuery}&language=pt-BR&page=${nextPage}`
      )
      .then(response => {
        this.setState({
          movies: response.data.results
          //textQuery: ""
        });
      });
  };
  render() {
    const { textQuery, movies, totalPages } = this.state;
    return (
      <>
        <Header>
          <h1>Movies</h1>
        </Header>
        <Container>
          <Search onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Busque um filme por nome ou gênero..."
              value={textQuery}
              onChange={this.handleInputChange}
            />
          </Search>
          {movies.map(movie => (
            <MovieItem key={movie.id}>
              <figure>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={
                      movie.poster_path
                        ? `http://image.tmdb.org/t/p/w200/${movie.poster_path}`
                        : ""
                    }
                    alt=""
                  />
                </Link>
              </figure>
              <Content>
                <Title>
                  <h2>
                    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                  </h2>
                  <Info>
                    <div>{movie.vote_average * 10}%</div>
                    <span>
                      {movie.release_date
                        .split("-")
                        .reverse()
                        .join("/")}
                    </span>
                  </Info>
                </Title>
                <Description>
                  <p>{movie.overview}</p>
                </Description>
              </Content>
            </MovieItem>
          ))}
          <Paginate>
            <ReactPaginate
              pageCount={totalPages}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              previousLabel={""}
              nextLabel={""}
              onPageChange={this.handlePageChange}
              containerClassName={"pagination"}
              previousLinkClassName={"page-link"}
              activeClassName={"page-item active"}
              disabledClassName={"page-item disabled"}
              activeLinkClassName={"page-link"}
              pageLinkClassName={"page-link"}
              nextLinkClassName={"page-link"}
              breakLinkClassName={"page-link"}
            />
          </Paginate>
        </Container>
      </>
    );
  }
}
