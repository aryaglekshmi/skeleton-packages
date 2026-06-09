import { EDataType, EInputType, IFormField, REGEX } from "@aryagg/types";

export const isEmail = (value: string): boolean => REGEX.EMAIL.test(value);
export const isPhone = (value: string): boolean => REGEX.PHONE.test(value);
export const isUrl = (value: string): boolean => REGEX.URL.test(value);
export const isAlpha = (value: string): boolean => REGEX.ALPHA.test(value);
export const isAlphanumeric = (value: string): boolean => REGEX.ALPHANUM.test(value);
export const isUUID = (value: string): boolean => REGEX.UUID.test(value);
export const isHexColor = (value: string): boolean => REGEX.HEX_COLOR.test(value);
export const isStrongPassword = (value: string): boolean => REGEX.PASSWORD_STRONG.test(value);

export const isNumeric = (value: string): boolean =>
    !isNaN(Number(value)) && value.trim() !== '';

export const isInRange = (value: number, min: number, max: number): boolean =>
    value >= min && value <= max;

export const hasMinLength = (value: string, min: number): boolean =>
    value.trim().length >= min;

export const hasMaxLength = (value: string, max: number): boolean =>
    value.trim().length <= max;

export const isRequiredFilled = (field: IFormField): boolean => {
    if (!field.required) return true;
    const value = field.value;

    switch (field.type) {
        case EInputType.FILE:
        case EInputType.IMAGE:
            if (field.multiple) return Array.isArray(value) && value.length > 0;
            return value instanceof File;

        case EInputType.CHECKBOX:
        case EInputType.RADIO:
        case EInputType.SELECT:
        case EInputType.NUMBER:
            return value !== null && value !== undefined && value !== '';

        case EInputType.MULTISELECT:
        case EInputType.MULTISELECT_ADDNEW:
            return Array.isArray(value) && value.length > 0;

        default:
            return (value || '').toString().trim().length > 0;
    }
};

export const parseInputValue = (value: unknown, type?: EDataType): unknown => {
    if (!value || !type) return value;
    switch (type) {
        case EDataType.NUMBER:
            return typeof value === 'number' ? value : Number(value);
        case EDataType.STRING:
            return String(value ?? '');
        case EDataType.BOOLEAN:
            return value === true || value === 'true' || value === 1 || value === '1';
        case EDataType.DATE:
            return value instanceof Date ? value : new Date(value as string);
        case EDataType.ARRAY:
            return Array.isArray(value) ? value : String(value).split(',');
    }
    return value;
};
