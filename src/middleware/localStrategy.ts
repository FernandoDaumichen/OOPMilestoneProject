import { Strategy as LocalStrategy } from "passport-local";
import { MockAuthenticationService } from "../areas/authentication/services";
import { PassportStrategy } from "../interfaces/passport.strategy.interface";

const mock = new MockAuthenticationService();

const localStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    try {
      const user = mock.getUserByEmailAndPassword(email, password);
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }
);

const passportLocalStrategy: PassportStrategy = {
  name: "local",
  strategy: localStrategy,
};

export default passportLocalStrategy;
