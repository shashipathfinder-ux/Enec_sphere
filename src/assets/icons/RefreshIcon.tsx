import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { useTheme } from "@/context/ThemeContext";

function RefreshIcon(props: any) {
  const { colors } = useTheme();
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <Path
        d="M14.667 5.54V2M14.667 2H11.127M14.667 2L12.553 4.113A6.667 6.667 0 1014.593 9.6"
        stroke={props.color || colors.plantHeaderIcon}
        strokeWidth={1.333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default RefreshIcon;
