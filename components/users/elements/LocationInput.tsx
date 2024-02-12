import { MutableRefObject } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function LocationInput(
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
    return <PlacesAutocomplete
        value={value}
        onChange={e => setValue(e)}
        onSelect={handleSelect}
        // searchOptions={{
        //     types: [],
        //     componentRestrictions: { country: "fr" },
        // }}
    >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className="Reserve1__container div_container relative">
                <div>
                    <p className="mb-2 font-medium" onClick={() => inputRef.current?.focus()}>
                        {label}
                    </p>
                    <div className="flex items-center">
                        <div onClick={() => inputRef.current?.focus()} className="border-[1px] border-r-[0px] h-10 rounded-l-[5px] px-2 flex items-center">
                            <LocationOnIcon className="" />
                        </div>
                        <input
                            ref={inputRef}
                            {...getInputProps({
                                placeholder: placeholder
                            })}
                            className="w-full border-[1px] h-10 rounded-[5px] rounded-l-[0px] outline-0 focus:border-[#33475A] px-1"
                        />
                    </div>
                </div>
                {getInputProps()["aria-expanded"] && (
                    <div className="Rsec2__place1 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-[1px] max-h-[250px] p-2 lg:!pr-0 overflow-y-scroll absolute w-full top-[100%] z-[9] bg-white">
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
                                    className="lg:w-[350px] py-2 cursor-pointer text-[14px] Rsec2__each"
                                >
                                    <i className="fa fa-map-marker"></i> {suggestion.description}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        )}
    </PlacesAutocomplete>
}