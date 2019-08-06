export const formatAddressData = (formData, rawAddress) => {
  /******
   * Todo:
   * crete cleaner solution insted of parising and pushing
   * data from google geolocation input
   ******/

  switch (Object.keys(rawAddress).length) {
    case 1:
      formData.country = rawAddress[0].long_name;
      break;
    case 4:
      formData.city = rawAddress[0].short_name;
      formData.country = rawAddress[3].long_name;
      break;
    case 5:
      formData.street = rawAddress[0].short_name;
      formData.city = rawAddress[1].short_name;
      formData.country = rawAddress[4].long_name;
      break;
    case 6:
      formData.street = rawAddress[0].short_name;
      formData.city = rawAddress[1].short_name;
      formData.country = rawAddress[4].long_name;
      break;
    case 7:
      formData.street = rawAddress[1].short_name;
      formData.house = rawAddress[0].short_name;
      formData.city = rawAddress[2].short_name;
      formData.country = rawAddress[5].long_name;
      formData.zipCode = rawAddress[6].short_name;
      break;
    default:
      break;
  }
  return formData;
};
