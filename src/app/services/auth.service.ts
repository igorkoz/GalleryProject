import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private datasource: IDMServer;
  constructor() {
    this.datasource = new IDMServer();
  }

  public authenticate(username: string, password: string) {
    return this.datasource.authenticate(username, password);
  }

  get authenticated(): boolean {
    return this.datasource.auth_token != null;
  }

  public clear() {
    this.datasource.auth_token = null;
  }
}

class IDMServer {
  public auth_token = null;
  public authenticate(username: string, password: string) 
    {
      if (username == "admin" && password == "password") {
        this.auth_token = "123";
        return true;
      }
      else {
        this.auth_token = null;
        return false;
      }
    }
}
