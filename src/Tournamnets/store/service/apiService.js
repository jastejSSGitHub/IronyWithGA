/* eslint-disable */

import webApiService from '../../../service/webApiService'


class apiService {
  getTournmentList = (page, limit, name, selected, data, search) => {
    if (search !== undefined) {
      return webApiService.post(`landing/tournament-list?page=${page}&limit=${limit}&name=${name}&selected=${selected}&Search=${search}`, data)
    } else {
      return webApiService.post(`landing/tournament-list?page=${page}&limit=${limit}&name=${name}&selected=${selected}`, data)
    }
  }
  getTournmentDetail = id => {
    return webApiService.get('landing/tournament-detail/' + id)
  }
}

const instance = new apiService();

export default instance;
