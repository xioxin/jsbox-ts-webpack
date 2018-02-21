export class MySerivce {

  getName(): Promise<string> {
    return new Promise((resolve, reject) => {
      $http.get({
        url: 'https://api.randomuser.me/',
        handler: (resp) => {
          if (!resp.error) {
            $console.info(resp.data);
            const user = resp.data.results[0];
            resolve(`${user.name.first} ${user.name.last}`);
          }
          reject(resp.error);
        }
      });
    });
  }

}
