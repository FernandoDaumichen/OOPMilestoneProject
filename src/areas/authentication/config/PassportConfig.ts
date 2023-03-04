//----------------------------------------
// TODO:                                 |
//----------------------------------------
// 🚀 Configure Passport.js Local Authentication in this file
//    Ensure code is fully typed wherever possible (unless inference can be made)
import passport from "passport";
import { Strategy } from "passport-local";

export interface PassportStrategy {
  name: string;
  strategy: Strategy;
}

export default class PassportConfig {
  constructor(strategies: PassportStrategy[] = []) {
    this.addStrategies(strategies);
  }

  getaddStrategies(strategies: PassportStrategy[]) {
    return this.addStrategies(strategies);
  }

  private addStrategies(strategies: PassportStrategy[]): void {
    strategies.forEach((passportStrategy: PassportStrategy) => {
      passport.use(passportStrategy.name, passportStrategy.strategy);
    });
  }
}
