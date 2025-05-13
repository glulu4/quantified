import {Timestamp} from '@google-cloud/firestore';


export interface User {
    uid: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    dateOfBirth: Date;
    weight: number;
    height: number;
    folders: string[];
    userSettings: UserSetting;
    createdAt: Timestamp;
    updatedAt?: Timestamp;
    deletedAt: Timestamp | null;
};

export interface UserSetting {
    id: string;
    colorScheme: string;
    // add more ...
}