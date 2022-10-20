import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";
import _ from "lodash";


export interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
  api_token: string;
}

export interface UserInfo {
  info: unknown;
}

export interface UserAuthInfo {
  errors: unknown;
  user: User;
  isAuthenticated: boolean;
}
export interface Permission {
  name: string;
}
@Module
export default class AuthModule extends VuexModule implements UserAuthInfo {
  errors = {};
  user = {} as User;
  userInfo = {} as UserInfo;
  isAuthenticated = !!JwtService.getToken();

  /**
   * Get current user object
   * @returns User
   */
  get currentUser(): User {
    return this.user;
  }

  /**
   * Get current user object
   * @returns User
   */
  get currentUserInfo(): UserInfo {
    return this.userInfo;
  }

  /**
   * Get permissions object
   * @returns User
   */
  get getPermissions(): unknown {
    let permission_number = 1;
    const permissions: unknown[] = [];
    while (window.localStorage.getItem(`permissions_${permission_number}`)) {
      const data = window.localStorage.getItem(
        `permissions_${permission_number}`
      );
      if (typeof data === "string") {
        const permissions_array = JSON.parse(data);
        for (let i = 0; i < permissions_array.length; i++) {
          permissions.push(permissions_array[i]);
        }
      }
      permission_number++;
    }
    return permissions || null;
  }

  /**
   * Verify user authentication
   * @returns boolean
   */
  get isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  /**
   * Get authentification errors
   * @returns array
   */
  get getErrors() {
    return this.errors;
  }

  @Mutation
  [Mutations.SET_ERROR](error) {
    this.errors = error;
  }

  @Mutation
  [Mutations.SET_AUTH](user) {
    this.isAuthenticated = true;
    let userPermissions: unknown[] = [];
    if (user.info) {
      userPermissions = _.map(
        _.union(user.info.permissions, user.info.role.permissions),
        function (permission: Permission) {
          return permission.name;
        }
      );
      userPermissions = _.uniq(userPermissions);
      let permission_number = 1;
      const assignPermission = userPermissions.slice(0);
      while (assignPermission.length > 0) {
        window.localStorage.setItem(
          `permissions_${permission_number}`,
          JSON.stringify(assignPermission.splice(0, 100))
        );
        permission_number++;
      }
      delete user.info.permissions;
      delete user.info.role.permissions;
    }
    this.user = user.info ? user.info : user;
    this.errors = [];
    if (user.access_token) JwtService.saveToken(user.access_token);
  }

  @Mutation
  [Mutations.SET_USER](user) {
    this.user = user;
  }

  @Mutation
  [Mutations.SET_USERINFO](user) {
    this.userInfo = user;
  }

  @Mutation
  [Mutations.SET_PASSWORD](password) {
    this.user.password = password;
  }

  @Mutation
  [Mutations.PURGE_AUTH]() {
    this.isAuthenticated = false;
    this.user = {} as User;
    this.errors = [];
    JwtService.destroyToken();
    let permission_number = 1;
    while (window.localStorage.getItem(`permissions_${permission_number}`)) {
      window.localStorage.removeItem(`permissions_${permission_number}`);
      permission_number++;
    }
  }

  @Action
  [Actions.LOGIN](credentials) {
    const params = {
      ...credentials,
    };
    return new Promise((resolve, reject) => {
      window.localStorage.clear();
      ApiService.post("api/auth/login", params)
        .then(async({ data }) => {
          if(data.success){
            await window.localStorage.setItem('userRole', JSON.stringify(data.data.info.role));
            await window.localStorage.setItem('userAgencies', JSON.stringify(data.data.info.agency));
            if(data.data.info.agency.length > 0){
              await window.localStorage.setItem('agencySelected', data.data.info.agency[0].name);
              await window.localStorage.setItem('agencyIdSelected', data.data.info.agency[0].id);
            }
            this.context.commit(Mutations.SET_USERINFO, data.data.info);
            this.context.commit(Mutations.SET_AUTH, data.data);
            await localStorage.setItem("user",JSON.stringify(data.data));
            await localStorage.setItem("userinfo",JSON.stringify(data.data.info));
            resolve(data);
          }
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_ERROR, response.data.message);
          reject(response);
        });
    });
  }

  @Action
  [Actions.LOGOUT]() {
    localStorage.clear();
    this.context.commit(Mutations.PURGE_AUTH);
  }

  @Action
  [Actions.REGISTER](credentials) {
    return ApiService.post("register", credentials)
      .then(({ data }) => {
        this.context.commit(Mutations.SET_AUTH, data);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }

  @Action
  [Actions.FORGOT_PASSWORD](payload) {
    return new Promise((resolve, reject) => {
      ApiService.post("/api/auth/forgot-password", payload)
        .then(({ data }) => {
          this.context.commit(Mutations.SET_AUTH, data);
          resolve(data);
        })
        .catch(({ response }) => {
          this.context.commit(
            Mutations.SET_ERROR,
            typeof response.data.error === "object"
              ? Object.values(response.data.error)
                  .toString()
                  .replace(",", "</br>")
              : response.data.message
          );
          reject(response);
        });
    });
  }

  @Action
  [Actions.VERIFY_AUTH]() {
    if (JwtService.getToken()) {
      ApiService.get("/api/auth/user")
        .then(({ data }) => {
          this.context.commit(Mutations.SET_AUTH, data.data[0]);
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_ERROR, response.data.errors);
          this.context.commit(Mutations.PURGE_AUTH);
        });
    } else {
      this.context.commit(Mutations.PURGE_AUTH);
    }
  }

  // @Action
  // [Actions.UPDATE_USER](payload) {
  //   ApiService.setHeader();
  //   return new Promise<void>((resolve, reject) => {
  //     ApiService.post("update_user", payload)
  //       .then(({ data }) => {
  //         this.context.commit(Mutations.SET_USER, data);
  //         resolve();
  //       })
  //       .catch(({ response }) => {
  //         this.context.commit(Mutations.SET_ERROR, response.data.errors);
  //         reject();
  //       });
  //   });
  // }
}
