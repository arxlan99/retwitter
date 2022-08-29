import HandlerFactory from './handlerFactory';

class TweetService extends HandlerFactory {
  constructor(Model: any) {
    super(Model);
  }
}

export default TweetService;
