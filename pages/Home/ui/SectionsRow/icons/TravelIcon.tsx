import {Svg, Path, Defs, ClipPath, G, Rect} from 'react-native-svg';

export default function TravelIcon() {

    return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" >
        <G clip-path="url(#clip0_2118_15606)">
            <Path opacity="0.2"
                  d="M12.5 0.5C5.87258 0.5 0.5 5.87258 0.5 12.5C0.5 19.1274 5.87258 24.5 12.5 24.5C19.1274 24.5 24.5 19.1274 24.5 12.5C24.5 5.87258 19.1274 0.5 12.5 0.5Z"
                  fill="#FE5900"/>
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12.8041 13.2363L15.5001 15.9801V24.1219C20.6758 22.7898 24.5001 18.0915 24.5001 12.5C24.5001 9.88763 23.6653 7.47024 22.248 5.5H16.0486C13.5365 5.5 11.5001 7.53641 11.5001 10.0485C11.5001 11.2409 11.9684 12.3857 12.8041 13.2363ZM0.666016 14.5H6.50009C8.70923 14.5 10.5001 16.2909 10.5001 18.5V24.3341C5.47509 23.491 1.50905 19.525 0.666016 14.5Z"
                  fill="#FE5900"/>
        </G>
        <Defs>
            <ClipPath id="clip0_2118_15606">
                <Rect width="24" height="24" fill="white" transform="translate(0.5 0.5)"/>
            </ClipPath>
        </Defs>
    </Svg>
    );
}
