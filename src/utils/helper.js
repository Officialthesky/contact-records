export default function findingLengthOfString(inputValue) {
  let firstnameLength = inputValue.length;
  return firstnameLength;
}

export const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};
export const validateName = (firstname) => {
  var re = /^[A-Za-z ]+$/;
  return re.test(firstname);
};
