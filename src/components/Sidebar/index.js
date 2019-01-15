/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import { Container, NewPlaylist, Nav } from './styles';

import Loading from '../Loading';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

// eslint-disable-next-line react/prefer-stateless-function
class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <a href="dada">Radio</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <a href="dada">Seu daily mix</a>
            </li>
            <li>
              <a href="dada">Tocados recentemente</a>
            </li>
            <li>
              <a href="dada">Musicas</a>
            </li>
            <li>
              <a href="dada">Albums</a>
            </li>
            <li>
              <a href="dada">Artistas</a>
            </li>
            <li>
              <a href="dada">Estacoes</a>
            </li>
            <li>
              <a href="dada">Arquivos locais</a>
            </li>
            <li>
              <a href="dada">Videos</a>
            </li>
            <li>
              <a href="dada">Podcasts</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>PLAYLIST</span>
              {this.props.playlists.loading && <Loading />}
            </li>

            <li>
              <a href="dada">Melhores do rock</a>
            </li>
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Adicionar playlist" />
          Nova playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
