import anna from './anna.png';
import message from './message.png';
import send from './send.png';
import newLogin from './newLogin.png';
import {ImageSourcePropType} from "react-native";

export type NotificationListType = {
    title: string;
    data: NotificationDataType[]
}

export type NotificationDataType = Notification | Operation;

export type Notification = {
    type: 'notification';
    title: string;
    image: ImageSourcePropType;
    body: string;
    isRead: boolean;
    date: string;
    section: string;
}

export type Operation = {
    type: 'receive' | 'send';
    title: string;
    image: ImageSourcePropType;
    isRead: boolean;
    amount: number;
    cardType: string;
    cardNumber: string;
    cardAmount: string;
    currency: string;
    date: string;
    section: string;


}
export const notificationsData: NotificationListType[] = [
    {
        title: 'Today, 17 JunE',
        data: [{
                type: 'receive',
                title: 'Received from Anna',
                image: anna,
                isRead: false,
                amount: 110,
                currency: '$',
                cardType: 'debit',
                cardNumber: '4385',
                cardAmount: '4,098.12',
                date: Date.now().toString(),
                section: 'Travel'
            }
        ]
    },
    {
        title: 'YESTERDay, 16 JunE',
        data: [{
                type: 'notification',
                image: message,
                isRead: true,
                title: 'See our limited offer!',
                body: 'Would you like to visit new countries? Maybe it’s your time!',
                date: Date.now().toString(),
                section: 'Travel',
            },
            {
                type: 'send',
                title: 'Sent to •• 2041',
                image: send,
                isRead: true,
                amount: 14.62,
                currency: '$',
                cardType: 'debit',
                cardNumber: '4399',
                cardAmount: '3,098.12',
                date: Date.now().toString(),
                section: 'Payments'
            }

        ]
    },
    {
        title: '24 MARCH, 2025',
        data: [{
            type: 'notification',
            image: newLogin,
            isRead: true,
            title: 'New login into account +$110',
            body: 'You have logged in from a new location: iOS 26.0.1 · 109.255.84.7 · Spain',
            date: Date.now().toString(),
            section: 'Travel',
        }

        ]
    },

]
