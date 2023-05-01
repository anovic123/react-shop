import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

export interface IAuth<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
> {
    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>
    errors: any;
}

export interface IAuthState {
    user: IPublicUser;
    isLogged: boolean;
    isLoading: boolean;
    status: any;
}

export interface IPublicUser {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;
    creationAt: string;
    updatedAt: string;
}

export interface ILoginData {
    email: string;
    password: string;
}

export interface IRegisterData {
    email: string;
    name: string;
    password: string;
    avatar: string;
}