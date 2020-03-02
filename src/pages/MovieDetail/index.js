import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../../util/format";
import api from "../../services/api";
import Header from "../../components/Header/index";
import Container from "../../components/Container/index";

import { InnerPage, MovieDetails, Genres, Loading } from "./styles";

export default class MovieDetail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string
      })
    }).isRequired
  };

  state = {
    details: {},
    loading: true,
    currentPage: 1,
    setCurrentPage: 1,
    pageCount: 0,
    setPageCount: 0
  };
  async componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;

    const [details, movie] = await Promise.all([
      api.get(
        `/3/movie/${id}?api_key=08555db9f6be8fa06d4c47bc7e2d3335&language=pt-BR`
      ),
      api.get(`/3/movie/${id}/videos?api_key=08555db9f6be8fa06d4c47bc7e2d3335`)
    ]);

    this.setState({
      details: details.data,
      revenue: formatPrice(details.data.revenue),
      budget: formatPrice(details.data.budget),
      profit: formatPrice(details.data.revenue - details.data.budget),
      movie: movie.data.results.filter(item => {
        return item.type == "Trailer";
      }),
      loading: false
    });

    console.log(details);
    console.log(movie);
  }
  renderIframe() {
    if (this.state.movie.lenght > 0) {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${this.state.movie[0].key}`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="Vídeo"
        ></iframe>
      );
    }
  }
  render() {
    const { details, movie, loading, revenue, budget, profit } = this.state;

    if (loading) {
      return <Loading>Carregando...</Loading>;
    }

    return (
      <>
        <Header>
          <h1>Movies</h1>
        </Header>
        <InnerPage>
          <header>
            <div>
              <Container>
                <h1>{details.title}</h1>
                <span>
                  {details.release_date
                    .split("-")
                    .reverse()
                    .join("/")}
                </span>
              </Container>
            </div>
          </header>
          <MovieDetails>
            <Container>
              <div>
                <div>
                  <h2>Sinopse</h2>
                  <p>{details.overview}</p>
                </div>
                <div>
                  <h2>Informações</h2>
                  <div className="infos">
                    <div>
                      <h3>Situação</h3>
                      <span>{details.status}</span>
                    </div>
                    <div>
                      <h3>Idioma</h3>
                      <span>
                        <ul>
                          {details.spoken_languages.map(language => (
                            <li key={language.name}>{language.name}</li>
                          ))}
                        </ul>
                      </span>
                    </div>
                    <div>
                      <h3>Duração</h3>
                      <span>{details.runtime}min</span>
                    </div>
                    <div>
                      <h3>Orçamento</h3>
                      <span>{budget}</span>
                    </div>
                    <div>
                      <h3>Receita</h3>
                      <span>{revenue}</span>
                    </div>
                    <div>
                      <h3>Lucro</h3>
                      <span>{profit}</span>
                    </div>
                  </div>
                </div>
                <footer>
                  <Genres>
                    {details.genres.map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </Genres>
                  <div className="vote-average">
                    {details.vote_average * 10}%
                  </div>
                </footer>
              </div>
            </Container>
            <figure>
              <img
                src={`http://image.tmdb.org/t/p/w500/${details.poster_path}`}
                alt={`Capa do filme ${details.title}`}
              ></img>
            </figure>
          </MovieDetails>
          {this.renderIframe()}
        </InnerPage>
      </>
    );
  }
}
