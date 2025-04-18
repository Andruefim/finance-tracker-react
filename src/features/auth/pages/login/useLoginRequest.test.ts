import React from 'react';
import {render, fireEvent, screen, renderHook} from '@testing-library/react';
import '@testing-library/dom';
import useLoginRequest from './useLoginRequest';
import { User } from '../../types';

const mockResponse: User = {
    username: 'username',
    email: 'email',
    totalBalance: 0,
    token: 'token',
    userId: 'userId',
    emailConfirmed: true
};


beforeEach(() => {})
afterEach(() => jest.restoreAllMocks())

test('makes login request and returns user', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
    } as Response)

    const { result } = renderHook(() => useLoginRequest());
    const user = await result.current.login(
      { email: 'email', password: 'password' },
      (error: string) => {}
    );
    expect(user).toEqual(mockResponse);
})


test('catches server error and calls error callback', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue("Error on server");
    
    const { result } = renderHook(() => useLoginRequest());

    let errorMessage;

    await result.current.login(
      { email: 'email', password: 'password' },
      (error: string) => { errorMessage = error}
    );

    expect(errorMessage).toEqual("Error on server");
})