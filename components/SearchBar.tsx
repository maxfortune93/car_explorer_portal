"use client";

import { useState } from "react";
import SearchManifacturer from "./SearchManifacturer";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { CustomButton } from ".";
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src={"/magnifying-glass.svg"}
        alt={"magnifying glass"}
        width={40}
        height={40}
        className='object-contain'
      />
    </button>
  );

const SearchBar = () => {

  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState("");
  const router = useRouter();
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };  
  const updateSearchParams = (model: string, manufacturer: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
       searchParams.delete("manufacturer");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname, {scroll: false});
  };

  const handleClearSearch = () => {
    
    setModel(''); setManufacturer('')

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete("model");
    searchParams.delete("manufacturer");
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname, {scroll: false});
  };
  return (
    <form className='searchbar'onSubmit={handleSearch}>
        
        <div className="searchbar__item">
            <SearchManifacturer  manufacturer={manufacturer} setManufacturer={setManufacturer} />
            <SearchButton otherClasses='sm:hidden' />
        </div>
        <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Tiguan...'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
      <div>
        <button
        type="button"
        className=" ml-4 -mr-7 z-10 w-fit p-2 bg-primary-blue-100 rounded-full max-sm:hidden"
        onClick={handleClearSearch}
      >
        <Image
          src="/close.svg"
          alt="close"
          width={20}
          height={20}
          className="object"
        />
        </button>

        <CustomButton 
                title="Limpar"
                containerStyles="bg-primary-blue
                text-white rounded-full sm:hidden"
                handleClick={handleClearSearch}
            />
       </div>
    </form>
  )
}

export default SearchBar