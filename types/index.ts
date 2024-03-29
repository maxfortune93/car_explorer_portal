import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    btnType?: 'button' | 'submit';
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    textStyles?: string;
    rightIcon?: string;
}


export interface SearchManifacturerProps {
    manufacturer: string;
    setManufacturer?: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  }

  export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }
  
  export interface  HomeProps {
    readonly searchParams: FilterProps;
  }

  
  export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
  }

  export interface OptionProps {
    title: string;
    value: string;
  }

  export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
  }
  

// export interface CarCardProps {
//     model: string;
//     make: string;
//     mpg: number;
//     transmission: string;
//     year: number;
//     drive: string;
//     cityMPG: number;
//   }