import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

export default function AnalyticsIcon({ color = '#000', size = 24 }: { color?: string; size?: number }) {

    return (
        <Svg width={size} height={size} viewBox="0 0 21 20" fill="none" >
            <G clipPath="url(#clip0_2753_162)">
                <Path fillRule="evenodd" clipRule="evenodd"
                      d="M11.3335 0.00854492H12.1668C16.7645 0.00854492 20.4917 3.73571 20.4917 8.33342V9.16675H19.6583H12.1668H11.3335V0.00854492ZM0.544754 11.6305C0.544754 7.03283 4.27192 3.30567 8.86958 3.30567H9.70291V4.139V10.7972H16.3612H17.1945V11.6305C17.1945 16.2283 13.4673 19.9554 8.86958 19.9554C4.27192 19.9554 0.544754 16.2283 0.544754 11.6305Z"
                      fill={color}/>
            </G>
            <Defs>
                <ClipPath id="clip0_2753_162">
                    <Rect width="20" height="20" fill="white" transform="translate(0.5)"/>
                </ClipPath>
            </Defs>
        </Svg>
    );
}
