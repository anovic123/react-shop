import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

export interface IAuth<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
> {
    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>
    errors: any;
}