export const formatAddressData = (formData, rawAddress) => {
  formData.street = rawAddress[1].short_name;
  formData.house = rawAddress[0].short_name;
  formData.city = rawAddress[2].short_name;
  formData.country = rawAddress[5].long_name;
  formData.zipCode = rawAddress[6].short_name;
  return formData;
};
