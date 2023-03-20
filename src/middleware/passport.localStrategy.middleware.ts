import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { PassportStrategy } from "../interfaces/passport.strategy.interface";
import { MockAuthenticationService } from "../areas/authentication/services/Authentication.service.mock";

const authService = new MockAuthenticationService();

const localStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    try {
      const user = authService.getUserByEmailAndPassword(email, password);
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }
);

passport.serializeUser(function (user: Express.User, done: (err: any, id?: number) => void) {
  done(null, (user as any).id);
});

passport.deserializeUser(async function (email: string, done: (err: any, id?: any) => void) {
  let user = await authService.findUserByEmail(email);
  if (user) {
    done(null, user);
  } else {
    done({ message: "User not found" }, null);
  }
});

const passportLocalStrategy: PassportStrategy = {
  name: "local",
  strategy: localStrategy,
};

export default passportLocalStrategy;
