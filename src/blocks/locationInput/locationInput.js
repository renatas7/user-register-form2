import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import './locationInput.scss';
import { connect } from 'react-redux';
import { actions } from './../../state';

const LocationInput = ({ data, dispatch }) => {
  const [address, setAddress] = useState('');

  const handleChange = address => {
    setAddress(address);
  };

  const handleSelect = address => {
    const payload = {
      address,
      data,
    };
    dispatch(actions.form.pushAddressData(payload));
    setAddress(address);
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
