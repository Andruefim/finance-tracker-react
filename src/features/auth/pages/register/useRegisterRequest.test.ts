import React from 'react';
import {render, fireEvent, screen, renderHook, waitFor} from '@testing-library/react';
import '@testing-library/dom';
import useRegisterRequest from './useRegisterRequest';
import { User } from '../../types';

const mockResponse = {
    message: "User registered successfully"
};

const errorResponse = { 
    message: "Error response" 
};

const registerData = { 
    email: 'email', 
    username: 'username', 
    password: 'password', 
    confirmPassword: 'passwrod' 
}


beforeEach(() => {})
afterEach(() => jest.restoreAllMocks())

test('makes register request and returns user', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
    } as Response)

    const { result } = renderHook(() => useRegisterRequest());
    const response = await result.current.register(
      registerData,
      (error: string) => {}
    );
    expect(response.message).toEqual("User registered successfully");
})


test('catches server error and calls error callback', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue(errorResponse);

    const onError = jest.fn();
    
    const { result } = renderHook(() => useRegisterRequest());

    await result.current.register(
      registerData,
      onError
    );

    await waitFor(() => {
        expect(onError).toHaveBeenCalledWith(errorResponse);
    })
})