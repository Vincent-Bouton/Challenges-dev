const darkMode = () => {
  const checked = document.getElementById("darkTheme").checked;
  const body = document.getElementsByTagName("body");
  if (checked) {
    body[0].classList.add("dark");
  } else {
    body[0].classList.remove("dark");
  }
};
