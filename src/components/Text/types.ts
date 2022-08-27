export interface TextStyles {
  fontSize?: string;
  color?: string;
}

export interface TextProps extends TextStyles {
  children: string;
}
