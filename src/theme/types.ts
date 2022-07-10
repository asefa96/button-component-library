export type VariantTypes =
  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "orange"

export type SizeTypes = "small" | "medium" | "large";

export type StickyPositionTypes =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"

export type Variants = Record<VariantTypes, any>;
export type Sizes = Record<SizeTypes, any>;
export type StickyPositions = Record<StickyPositionTypes, any>;