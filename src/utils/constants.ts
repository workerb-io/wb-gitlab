/* eslint-disable import/prefer-default-export */
export const uri = "https://gitlab.com/api/v4";
export const token = process.env.GITLAB_PERSONAL_TOKEN;

interface User {
  id: number;
  name: string;
  email: string;
}

class User {
  private userInfo: User = {} as User;

  setUser(info: any) {
    this.userInfo = info;
  }

  get user() {
    return this.userInfo;
  }
}

export const currentUser = new User();
