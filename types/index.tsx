import { MouseEventHandler } from "react";
import SearchManufactures from './../components/SearchManufactures';
import { manufacturers } from './../constants/index';

export interface CustomButtonProps {
    title: string;
    containerStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit"
    textStyle?: string;
    rightIcon?: string;
    isDisabled?: boolean;

}

export interface SearchManufacturerProps{
    manufacturer: string;
    setManufacturer: (manufacturers: string) => void;
}

export interface CarProps{
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}