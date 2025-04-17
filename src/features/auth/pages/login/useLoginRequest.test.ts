import React from 'react';
import {render, fireEvent, screen, renderHook} from '@testing-library/react';
import '@testing-library/dom';
import useLoginRequest from './useLoginRequest';
import { BACKEND_URL } from '../../../../api/apiUrls';
import { User } from '../../types';

const mockResponse: User = {
    username: 'username',
    email: 'email',
    totalBalance: 0,
    token: 'token',
    userId: 'userId',
    emailConfirmed: true
} 

beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
    } as Response)
})
afterEach(() => jest.restoreAllMocks())

test('makes login request and returns user', async () => {
    const { result } = renderHook(() => useLoginRequest());
    const user = await result.current.login(
      { email: 'email', password: 'password' },
      (error: string) => {}
    );
    expect(user).toEqual(mockResponse);
})