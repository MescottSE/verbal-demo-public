import { ListParameters } from "./common";

export type UserListParameters = ListParameters & {
    includeRole?: boolean;
};

export const PasswordMinLength = 8;
export const PasswordMaxLength = 70;
export const PasswordValidityChecks = [/[a-z]/, /[A-Z]/, /\d/, /[^A-z\d]/];

export type DashboardStats = {
    totalStories: number;
    totalStories30: number;
};
