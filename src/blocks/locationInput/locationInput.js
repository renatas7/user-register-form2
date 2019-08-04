import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
} from 'react-places-autocomplete';
import './locationInput.scss';
import { connect } from 'react-redux';
// import { actions } from './../../state';

const LocationInput = ({ data }) => {
  const [address, setAddress] = useState('');
  console.log(data.address);
  // const [address, setAddress] = useState({
  //   address: data.address !== null ? data.address : '',
  // });

  const handleChange = address => {
    setAddress(address);
  };

  const handleSelect = address => {
    console.log(address);
    setAddress(address);
    geocodeByAddress(address)
      .then(results => console.log(results))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };
  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Address',
              className: 'input',
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';

              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

const mapStateToProps = state => ({
  data: state.formState.formData,
  editingUserId: state.formState.editingUserId,
});

export default connect(mapStateToProps)(LocationInput);
