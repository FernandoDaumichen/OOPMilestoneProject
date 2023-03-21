//----------------------------------------
// TODO:                                 |
//----------------------------------------
// 🚀 Configure Passport.js Local Authentication in this file
//    Ensure code is fully typed wherever possible (unless inference can be made)
import passport from "passport";
import { PassportStrategy } from "../../../interfaces/passport.strategy.interface";
import { MockAuthenticationService } from "../services/Authentication.service.mock";
import { Strategy as LocalStrategy } from "passport-local";
import { IAuthenticationService } from "../services";


export default class PassportConfig {
  private _authenticationService: IAuthenticationService;


  constructor(strategies: PassportStrategy[] = [], authenticationService: IAuthenticationService) {
    this.addStrategies(strategies);
    this._authenticationService = authenticationService;
  }

  private addStrategies(strategies: PassportStrategy[]): void {
    strategies.forEach((passportStrategy: PassportStrategy) => {
      passport.use(passportStrategy.name, passportStrategy.strategy);
    });
  }


  private localStrategy(): void {
    passport.use(
      new LocalStrategy(
        {
          usernameField: "email",
          passwordField: "password",
        }, 
        (email, password, done) => {
          try {
            const user = this._authenticationService.getUserByEmailAndPassword(email, password);
            return done(null, user);
          } catch (err) {
            return done(err, null);
          }
        }
      )
    )
  }  
  
  private serializrUser(): void { 
    passport.serializeUser (function (user: Express.User, done: (err: any, id?: number) => void) {
     done(null, (user as any).id);
   });
  }
  
  private deserializeUser(): void {

    passport.deserializeUser(async function (id: number, done: (err: any, id?: any) => void) {
      let user = this._authenticationService.getUserById(id);
      if (user) {
        done(null, user);
      } else {
        done({ message: "User not found" }, null);
      }
    });

  }


}
