import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

export default function PaymentsIcon({ color = '#000', size = 24 }: { color?: string; size?: number }) {
    return (
    <Svg width={size} height={size} viewBox="0 0 21 20" fill="none">
        <G clipPath="url(#clip0_2753_151)">
            <Path fillRule="evenodd" clipRule="evenodd"
                  d="M13.9972 0.0675659L15.4198 1.49015L19.6601 5.73045L20.2493 6.3197L19.6601 6.90895L15.4198 11.1493L13.9972 12.5719V9.1101H8.77839V3.52931H13.9972V0.0675659ZM7.00277 7.42434L5.58018 8.84694L1.3399 13.0872L0.750641 13.6764L1.3399 14.2657L5.58018 18.506L7.00277 19.9286V16.4669H12.2216V10.8861H7.00277V7.42434Z"
                  fill={color}/>
        </G>
        <Defs>
            <ClipPath id="clip0_2753_151">
                <Rect width="20" height="20" fill="white" transform="translate(0.5)"/>
            </ClipPath>
        </Defs>
    </Svg>
    );
}
