import { UnauthGuard } from '@app/guards/unauth.guard';
import { AuthGuard } from '@app/guards/auth.guard';

class MockRouter {
  navigateByUrl(path) {}
}

describe('Guards', () => {
  let authGuard: AuthGuard;
  let unAuthGuard: UnauthGuard;
  let userService;
  let router;

  beforeEach(() => {
    router = new MockRouter();
    jest.spyOn(router, 'navigateByUrl');
  });

  describe('AuthGuard', () => {
    const createAuthLogginMock = response => {
      userService = { isLoggedIn: () => response };
      authGuard = new AuthGuard(router, userService);
    };

    it('should return true for a logged in user', () => {
      createAuthLogginMock(true);
      expect(authGuard.canActivate()).toEqual(true);
    });

    it('should navigate to home for a logged out user', () => {
      createAuthLogginMock(false);
      expect(authGuard.canActivate()).toEqual(false);
      expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
    });
  });

  describe('UnAuthGuard', () => {

    const createUnAuthLogginMock = response => {
      userService = { isLoggedIn: () => response };
      unAuthGuard = new UnauthGuard(router, userService);
    };

    it('should return false if a user is loggued in', () => {
      createUnAuthLogginMock(true);
      expect(unAuthGuard.canActivate()).toEqual(false);
    });

    it('should navigate to Books for a logged user', () => {
      createUnAuthLogginMock(true);

      expect(unAuthGuard.canActivate()).toEqual(false);
      expect(router.navigateByUrl).toHaveBeenCalledWith('/books');
    });
  });

});
