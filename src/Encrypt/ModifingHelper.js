function CorrettingJsonData(JsonString) {
  let i = -1;
  while ((i = JsonString.indexOf(`:"`, i + 1)) >= 0) {
    if (JsonString[i - 1] !== `"`) {
      JsonString = JsonString.substr(0, i - 1) + '"' + JsonString.substr(i);
    }
  }
  return JsonString;
}

export { CorrettingJsonData };
