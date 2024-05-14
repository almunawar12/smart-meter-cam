export interface LoginTypes {
    email: string;
    guidAplication: string;
    password: string;
}

export interface RegisterTypes { 
    email: string;
    password: string;
    phoneNumber: string;
    name: string;
    guidAplication: string;
    role: string;
    companyGuid: string;
}

export interface ActivationTypes {
    email: string;
    guidAplication: string;
    otp: string;
}

export interface ForgotPasswordTypes {
    email: string;
}

export interface UpdatePasswordTypes {
    newPassword: string;
}