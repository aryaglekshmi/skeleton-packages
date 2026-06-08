export interface ISession {
    user: IAuthUser;
    accessToken: string;
    expiresAt: number;
}

export interface IAuthUser {
    id: string;
    email: string;
    name: string;
    role: EUserRole;
    avatarUrl?: string;
}

export interface ILoginCredentials {
    email: string;
    password: string;
    rememberMe?: boolean;
}

export interface IRegisterData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface IForgotPasswordData {
    email: string;
}

export interface IResetPasswordData {
    token: string;
    password: string;
    confirmPassword: string;
}

export interface IAuthState {
    user: IAuthUser | null;
    isAuthenticated: boolean;
}

export enum EUserRole {
    SUPER_ADMIN = 'SUPER_ADMIN',
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    USER = 'USER',
    GUEST = 'GUEST'
}

export enum EAuthErrorCode {
    INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
    USER_NOT_FOUND = 'USER_NOT_FOUND',
    EMAIL_ALREADY_EXISTS = 'EMAIL_ALREADY_EXISTS',
    TOKEN_EXPIRED = 'TOKEN_EXPIRED',
    UNAUTHORIZED = 'UNAUTHORIZED',
    NETWORK_ERROR = 'NETWORK_ERROR'
}
