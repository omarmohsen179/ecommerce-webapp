function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
const CheckPhoneNumber = async (number) => {
  var Regex = /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
  return Regex.test(number);
};
