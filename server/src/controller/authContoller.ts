import AuthService from '../services/auth.service';

const userService = new AuthService();

export const login = userService.login();
export const protect = userService.protect();
export const signup = userService.signup();
// export const logout = userService.logout();
