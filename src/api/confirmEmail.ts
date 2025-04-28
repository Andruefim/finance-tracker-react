import { ConfirmEmailData } from "../features/auth/pages/confirmEmail/ConfirmEmailForm";
import { http, postHeaders } from "../services/http";
import { BACKEND_URL } from "./apiUrls";

type SendEmailConfirmationResponse = { confirmationSent: boolean };
type ConfirmEmailResponse = { emailConfirmed: boolean };

export const sendEmailConfirmation = async (): Promise<SendEmailConfirmationResponse | undefined> => {
    return http.post<{},SendEmailConfirmationResponse>('/api/Authenticate/send-email-confirmation', {})
}

export const confirmEmail = async (data: ConfirmEmailData, setError: (err: string) => void): Promise<ConfirmEmailResponse | undefined> => {
    return http.post<ConfirmEmailData, ConfirmEmailResponse>('/api/Authenticate/confirm-email', data, setError)
}