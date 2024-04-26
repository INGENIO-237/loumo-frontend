import GooglePlacesAutocomplete from "react-google-autocomplete";

type Props = {
  className?: string;
  onPlaceSelected: (place: any) => void;
};

export default function GooglePlaces({ className, onPlaceSelected }: Props) {
  return (
    <GooglePlacesAutocomplete
      apiKey={import.meta.env.VITE_GP_API_KEY as string}
      onPlaceSelected={(place: any) => onPlaceSelected(place)}
      googleMapsScriptBaseUrl="https://maps.googleapis.com/maps/api/js"
      className={className}
      options={{
        types: "cities",
      }}
    />
  );
}
