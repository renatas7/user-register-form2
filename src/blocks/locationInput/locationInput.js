import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { connect } from 'react-redux';
import { actions } from './../../state';
import styles from './locationInput.module.scss';
import { Spinner } from '../../components';

const LocationInput = ({ data, dispatch, formNotValid }) => {
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

  const errorStyle = {
    border: '1px solid #d22d2d',
  };
  const okStyle = {
    border: 'none',
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
              className: styles.input,
              style: formNotValid && address === '' ? errorStyle : okStyle,
            })}
          />
          <div className={styles.autocompleteDropdownDontainer}>
            {loading && <Spinner />}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';

              const style = suggestion.active
                ? { backgroundColor: '#ebeaeb', cursor: 'pointer' }
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
  formNotValid: state.formState.formNotValid,
});

export default connect(mapStateToProps)(LocationInput);
