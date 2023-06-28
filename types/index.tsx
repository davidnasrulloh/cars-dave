import { MouseEventHandler } from "react";
import SearchManufactures from './../components/SearchManufactures';
import { manufacturers } from './../constants/index';

export interface CustomButtonProps {
    title: string;
    containerStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType: "button" | "submit"

}

export interface SearchManufacturerProps{
    manufacturer: string,
    setManufacturer: (manufacturers: string) => void
}