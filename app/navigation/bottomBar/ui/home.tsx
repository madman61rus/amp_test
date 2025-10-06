import Svg, { Path } from "react-native-svg";

export default function HomeIcon({ color = '#000', size = 24 }: { color?: string; size?: number }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 22 20" fill="none">
            <Path fillRule="evenodd" clipRule="evenodd"
              d="M20.625 8.25385L11 0.00384521L1.375 8.25385V19.1666H20.625V8.25385Z" fill={color} />
        </Svg>
    );
}
