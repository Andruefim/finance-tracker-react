import { ConfirmEmailData } from "../features/auth/pages/confirmEmail/ConfirmEmailForm";
import { postHeaders } from "../services/http";
import { BACKEND_URL } from "./apiUrls";

type SendEmailConfirmationResponse = { confirmationSent: boolean };
type ConfirmEmailResponse = { emailConfirmed: boolean };

export const sendEmailConfirmation = async (): Promise<SendEmailConfirmationResponse | undefined> => {
    try {
        const response = await fetch(`${BACKEND_URL}/api/Authenticate/send-email-confirmation`, {
            method: 'POST',
            headers: postHeaders,
        });

        return await response.json(); 
    } catch (e) {
        console.log(e as string)
    }
}

export const confirmEmail = async (data: ConfirmEmailData, setError: (err: string) => void): Promise<ConfirmEmailResponse | undefined> => {
    try {
        const response = await fetch(`${BACKEND_URL}/api/Authenticate/confirm-email`, {
            method: 'POST',
            headers: postHeaders,
            body: JSON.stringify(data)
        });

        return await response.json(); 
    } catch (e) {
        setError(e as string)
    }
}