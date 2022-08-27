export interface TextStyles {
  fontWeight?: string | number;
  fontSize?: string | number;
  color?: string;
}

export interface TextProps extends TextStyles {
  children: string;
}
