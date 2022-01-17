// export enum SIZE {
//   AUTO = 'auto',
//   XS = 'xs',
//   SM = 'sm',
//   MD = 'md',
//   LG = 'lg',
//   XL = 'xl',
// }

type Size = 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// type TSize = {
//     auto?: SIZE.AUTO;
//     xs?: SIZE.XS;
//     sm?: SIZE.SM;
//     md?: SIZE.MD;
//     lg?: SIZE.LG;
//     xl?: SIZE.XS;
//   };

export enum VARIANT {
  PRIMARY = 'primary',
  PRIMARY_OUTLINE = 'primary-outline',
  SUCCESS = 'success',
  SUCCESS_OUTLINE = 'success-outline',
  DANGER = 'danger',
  DANGER_OUTLINE = 'danger-outline',
}

export enum AVATAR_VARIANT {
  SQUARE = 'square',
  ROUNDED = 'rounded',
  CIRCLE = 'circle',
}

type Variant =
  | 'primary'
  | 'primary-outline'
  | 'success'
  | 'success-outline'
  | 'danger'
  | 'danger-outline';

export type TAvatarVariant = 'square' | 'rounded' | 'circle';
