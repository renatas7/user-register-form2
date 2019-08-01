import request from 'request-promise';

export class Api {
  // private static ENDPOINTS = config.API_ENDPOINTS;
  // private static BASE_URL: string = config.API_BASE_URL;

  static async withoutOAuth(options) {
    const finalOptions = {
      json: true,
      ...options,
    };
    return await request(finalOptions);
  }

  static async updateDashboardDetails() {
    const options = {
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users',
    };

    return await Api.withoutOAuth(options);
  }
}
