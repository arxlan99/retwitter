import HandlerFactory from './handlerFactory';

class UserService extends HandlerFactory {
  constructor(Model: any) {
    super(Model);
  }
}

export default UserService;
