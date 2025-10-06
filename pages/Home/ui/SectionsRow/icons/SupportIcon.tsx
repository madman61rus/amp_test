import {Svg, Path, Defs, ClipPath, G, Rect} from 'react-native-svg';

export default function SupportIcon() {

    return (
        <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" >
            <G clip-path="url(#clip0_2118_15626)">
                <Path fill-rule="evenodd" clip-rule="evenodd"
                      d="M6.5 8.5C6.5 5.18629 9.18629 2.5 12.5 2.5C15.8137 2.5 18.5 5.18629 18.5 8.5V16.5C18.5 18.9853 16.4853 21 14 21H13.5V19.5H11.5V24.5H13.5V23H14C17.5899 23 20.5 20.0898 20.5 16.5V8.5C20.5 4.08172 16.9183 0.5 12.5 0.5C8.08172 0.5 4.5 4.08172 4.5 8.5V17.5H6.5V8.5Z"
                      fill="#FE5900"/>
                <Path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M6.5 8.5H0.5V17.5H6.5V8.5Z"
                      fill="#FE5900"/>
                <Path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M24.5 8.5H18.5V17.5H24.5V8.5Z"
                      fill="#FE5900"/>
            </G>
            <Defs>
                <ClipPath id="clip0_2118_15626">
                    <Rect width="24" height="24" fill="white" transform="translate(0.5 0.5)"/>
                </ClipPath>
            </Defs>
        </Svg>
    )
}
