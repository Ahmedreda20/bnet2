const currentForm = document.querySelectorAll(".auth_form");

currentForm.forEach((form) => {
  let allRequired = form.querySelectorAll("[required]");

  allRequired.forEach((required) => {
    if (
      required.type !== "radio" &&
      required.type !== "checkbox" &&
      required.type !== "file"
    ) {
      if (required.value === "") {
        form.querySelector(".btn_submit").setAttribute("disabled", true);
      } else {
        form.querySelector(".btn_submit").removeAttribute("disabled");
      }
    }

    if (required.type === "radio" || required.type === "checkbox") {
      required.onclick = ({ target }) => {
        if (target.checked) {
          form.querySelector(".btn_submit").removeAttribute("disabled");
        } else {
          form.querySelector(".btn_submit").setAttribute("disabled", true);
        }
      };
    }
  });
});
