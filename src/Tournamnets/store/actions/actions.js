import apiService from '../service/apiService'

export function getTournmentList(page, limit, name, selected, data, search) {
  return (dispatch) =>
    apiService.getTournmentList(page, limit, name, selected, data, search).then((response) => {
      return response;
    }
    );
}

export function getTournmentDetail(id) {

  return (dispatch) =>
    apiService.getTournmentDetail(id).then((response) => {
      return response;
    }
    );
}