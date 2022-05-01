export default function findingLengthOfString(inputValue) {
  let firstnameLength = inputValue.length;
  return firstnameLength;
}

export const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};
