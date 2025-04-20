import React from 'react';
import {render, fireEvent, screen, renderHook, waitFor} from '@testing-library/react';
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

const errorResponse = { 
  message: "Error response" 
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
    jest.spyOn(global, 'fetch').mockRejectedValue(errorResponse);
    
    const onError = jest.fn();

    const { result } = renderHook(() => useLoginRequest());

    await result.current.login(
      { email: 'email', password: 'password' },
      onError
    );

    await waitFor(() => {
      expect(onError).toHaveBeenCalledWith(errorResponse);
    })

})