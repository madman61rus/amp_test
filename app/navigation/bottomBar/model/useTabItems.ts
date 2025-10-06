import HomeIcon from '@/app/navigation/bottomBar/ui/home';
import PaymentsIcon from '@/app/navigation/bottomBar/ui/payments';
import ChatsIcon from '@/app/navigation/bottomBar/ui/chats';
import HistoryIcon from '@/app/navigation/bottomBar/ui/history';
import AnalyticsIcon from '@/app/navigation/bottomBar/ui/analytics';

export type TabItem = {
    name: string;
    Icon: React.FC<{ color?: string; size?: number }>;
};

export const useTabItems = (): TabItem[] => [
    { name: 'Home', Icon: HomeIcon },
    { name: 'Payments', Icon: PaymentsIcon },
    { name: 'History', Icon: HistoryIcon },
    {name: 'Analytics', Icon: AnalyticsIcon },
    {name: 'Chats', Icon: ChatsIcon}
];
