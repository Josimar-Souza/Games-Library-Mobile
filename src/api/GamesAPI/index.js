import axios from 'axios';
import CustomError from '../../helpers/CustomError'

const baseUrl = process.env.EXPO_PUBLIC_API_URL;

class GamesAPI {
  constructor(timeout = 20000) {
    this.api = axios.create({
      timeout,
      baseUrl,
    })
  }

  async GetAllGames() {
    try {
      const { data } = await this.api.get('/games');

      return data?.games;
    } catch (e) {
      return new CustomError(e, 'Não foi possível listar todos os jogos! Tente novamente mais tarde.');
    }
  }

  async GetGameById(id) {
    try {
      const { data } = await this.api.get(`/games/${id}`);

      return data?.game;
    } catch (e) {
      return new CustomError(e, 'Não foi possível listar esse jogo! Tente novamente mais tarde.');
    }
  }

  async AddNewGame(newGame) {
    try {
      const { data } = await this.api.post('/games', newGame);

      return data?.gameAdded;
    } catch (e) {
      return new CustomError(e, 'Não foi possível adicionar esse jogo! Tente novamenta mais tarde.')
    }
  }

  // Actually returns no content (204).
  async UpdateGameById(id, newValues) {
    try {
      const { data } = this.api.put(`/games/${id}`, newValues);

      return data;
    } catch (e) {
      return new CustomError(e, 'Não foi possível atualizar esse jogo! Tente novamente mais tarde.');
    }
  }

  // Actually returns no content (204).
  async DeleteGameById(id) {
    try {
      const { data } = this.api.delete(`games/${id}`);

      return data;
    } catch (e) {
      return new CustomError(e, 'Não foi possível deletar esse jogo! Tente novamente mais tarde.');
    };
  }
}

export default GamesAPI;
