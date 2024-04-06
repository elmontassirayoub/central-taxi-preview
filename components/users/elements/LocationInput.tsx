import { MutableRefObject, useEffect, useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Script from "next/script"

function LocationInput(
    { value, setValue, handleSelect, inputRef, label, placeholder }:
        {
            value: string,
            setValue: Function,
            handleSelect: (address: string, placeID: string) => void,
            inputRef: MutableRefObject<HTMLInputElement | null>,
            label: string,
            placeholder: string
        }
) {

    const [googleApiLoaded, setGoogleApiLoaded] = useState(false);

    return (
        <>
            <Script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBXEWRHUlGgKQtuKiep7JyxhfV3a65Rxss&amp;libraries=places"
                onLoad={() => setGoogleApiLoaded(true)}
            ></Script>
            {googleApiLoaded && <PlacesAutocomplete
                value={value}
                onChange={e => setValue(e)}
                onSelect={handleSelect}
                searchOptions={{
                    types: [],
                    componentRestrictions: { country: "fr" },
                }}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className="Reserve1__container div_container relative">
                        <div>
                            <p className="mb-2 font-medium" onClick={() => inputRef.current?.focus()}>
                                {label}
                            </p>
                            <div className="flex items-center">
                                <div onClick={() => inputRef.current?.focus()} className="border-[3px] border-primary-100 border-r-[0px] h-10 rounded-l-[5px] px-2 flex items-center">
                                    <LocationOnIcon className="" />
                                </div>
                                <input
                                    ref={inputRef}
                                    {...getInputProps({
                                        placeholder: placeholder
                                    })}
                                    className="w-full border-[3px] border-primary-100 h-10 rounded-[5px] rounded-l-[0px] outline-0 px-1"
                                />
                            </div>
                        </div>
                        {getInputProps()["aria-expanded"] && (
                            <div className="Rsec2__place1 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] max-h-[250px] p-2 lg:!pr-0 overflow-y-scroll border-[3px] border-primary-100 absolute w-full top-[calc(100%_+_5px)] z-[9] bg-white rounded-[5px]">
                                {loading ? <div>...loading</div> : null}

                                {suggestions.map((suggestion, idx) => {
                                    const style = {
                                        backgroundColor: suggestion.active ? "#33475A" : "#fff",
                                        color: suggestion.active ? "white" : "black",
                                    };

                                    const attrs = { ...getSuggestionItemProps(suggestion, { style }) }

                                    return (
                                        <div
                                            {...attrs}
                                            key={idx}
                                            className="py-2 cursor-pointer text-[14px] Rsec2__each"
                                        >
                                            <i className="fa fa-map-marker"></i> {suggestion.description}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                )}
            </PlacesAutocomplete>}
        </>
    )


}

export default LocationInput