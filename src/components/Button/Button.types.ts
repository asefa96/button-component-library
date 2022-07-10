import { VariantTypes,SizeTypes, StickyPositionTypes } from "../../theme/types"

export type ButtonType<T=JSX.IntrinsicElements["button"]>=T&{
    variant?:VariantTypes;
    size?:SizeTypes;
    text?:string;  
    stickyPosition?:StickyPositionTypes;
}