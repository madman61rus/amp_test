import mettew from './mettew.jpg';
import starbucks from './starbucks.png';
import netflix from './netflix.png';

import {ImageSourcePropType} from "react-native";

export type ExpensesDataType = {
    name: string;
    type: string;
    amount: number;
    currency: string;
    date: string;
    avatar: ImageSourcePropType;
}

export const data: {title: string, data: ExpensesDataType[]}[] = [
    {
        title: 'Today',
        data: [
            {
                name: 'Matthew Billson',
                type: 'Money Transfer',
                amount: 5000,
                currency: '$',
                date: Date.now().toString(),
                avatar: mettew
            }
        ]
    },
    {
        title: 'Yesterday',
        data: [
            {
                name: 'Matthew Billson',
                type: 'Money Transfer',
                amount: 5000,
                currency: '$',
                date: Date.now().toString(),
                avatar: starbucks
            },
            {
                name: 'Matthew Billson',
                type: 'Money Transfer',
                amount: 5000,
                currency: '$',
                date: Date.now().toString(),
                avatar: netflix
            }
        ]
    }
]
