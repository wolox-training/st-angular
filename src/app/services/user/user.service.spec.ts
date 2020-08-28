import { storeMock } from '@app/test/storeMock';
import { environment } from '@env/environment';
import { userMock } from './../../test/userMock';
import { LocalStorageService } from '@app/services/local-storage.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('ServiceService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  let store;

  const apiUrl = `${environment.apiUrl}/users`;

  const localStorageResponse = [storeMock['access-token'], storeMock.uid, storeMock.client];


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
       LocalStorageService
      ]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.get(HttpTestingController);
    store = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Create user method', () => {
    it('service should send POST request when create a user', () => {
      service.createUser(userMock).subscribe(response => { });
      const request = httpMock.expectOne(`${apiUrl}`);
      expect(request.request.method).toBe('POST');
    });

    it('service should send correct Body when create a user', () => {
      service.createUser(userMock).subscribe(() => {});
      const request = httpMock.expectOne(`${apiUrl}`);
      expect(request.request.body).toEqual(userMock);
    });
  });

  describe('Get user method', () => {
    it('service should send GET request to the correct url when get a user', () => {
      service.getUser(userMock.id).subscribe(response => { });
      const request = httpMock.expectOne(`${apiUrl}/${userMock.id}`);
      expect(request.request.method).toBe('GET');
    });
  });

  describe('Login method', () => {
    it('service should send correct Body made a login', () => {
      service.login({ email: userMock.email, password: userMock.password }).subscribe(response => { });
      const request = httpMock.expectOne(`${apiUrl}/sign_in`);
      expect(request.request.method).toBe('POST');
      expect(request.request.body).toEqual({email: userMock.email, password: userMock.password});
    });

    it('Should respond true when user is Logged in isLoggedIn method', () => {
      const storeSpy = jest
        .spyOn(store, 'get')
        .mockImplementation(() => localStorageResponse);
      expect(service.isLoggedIn()).toBeTruthy();
      expect(storeSpy).toHaveBeenCalledWith('access-token', 'client', 'uid');
    });

    it('Should respond false when is nothing in localStorage', () => {
      jest
        .spyOn(store, 'get')
        .mockImplementation(() => []);
      expect(service.isLoggedIn()).toBeFalsy();
    });
  });
});
