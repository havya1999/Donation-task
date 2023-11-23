export default function validation(values) {
  const errors = {};

  const email_pattern =/^[^\s@]+@[^\s@]+$/;

  if (values.fullname === "") {
    errors.fullname = "Name is Requires";
  }
  if (values.email === "") {
    errors.email = "email is Required";
  }
  // } else if (!email_pattern.test(values.email)) {
  //   errors.email = "Email did'nt match";
  // }
  if (values.postalcode === "") {
    errors.postalcode = "Postal code is Requires";
  }
  if (values.Taxrecepient === "") {
    errors.Taxrecepient = "Tax Recepient is Requires";
  }
  if (values.taxfullname === "") {
    errors.taxfullname = "Tax Full Name is Requires";
  }
  if (values.uninumb === "") {
    errors.uninumb = "Unit Number is Requires";
  }
  if (values.remark === "") {
    errors.remark = "Remark is Requires";
  }
  if (values.Address === "") {
    errors.Address = "Address is Requires";
  }

  return errors
}
