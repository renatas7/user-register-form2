import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { connect } from 'react-redux';
import { actions } from './../../state';
import styles from './locationInput.module.scss';
import { Spinner } from '../../components';
import PropTypes from 'prop-types';

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
              const style = suggestion.active
                ? {
                    backgroundColor: '#ebeaeb',
                    cursor: 'pointer',
                    borderBottom: '1px solid #ebeaeb',
                  }
                : {
                    backgroundColor: '#ffffff',
                    cursor: 'pointer',
                    borderBottom: '1px solid #ebeaeb',
                  };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
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

LocationInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
  }),
  formNotValid: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(LocationInput);
