import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

function Button({ children, className, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={isLoading}
      className={`bg-green-base justify-center h-20 rounded-2xl mb-10 flex-row items-center gap-4 ${className}`}
      {...rest}
    >
      {isLoading ? <ActivityIndicator color={"#fff"} size={40} /> : children}
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return <Text className="font-medium1 capitalize text-gray-100 text-lg">{children}</Text>;
}

type IconProps = {
  icons: React.ComponentType<TablerIconProps>;
};

function Icon({ icons: Icon }: IconProps) {
  return <Icon size={32} color={"#fff"} />;
}

Button.Title = Title;
Button.Icon = Icon;

export { Button };
