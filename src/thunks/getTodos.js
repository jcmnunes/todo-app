import axios from 'axios';
import { GET_TODOS } from '../api';
import { setTodosLoaded, setTodosLoading } from '../actions/todos';

export default () => dispatch => {
  dispatch(setTodosLoading());

  return axios.get(GET_TODOS).then(response => {
    const { data } = response;
    dispatch(setTodosLoaded(data));
  });
};
