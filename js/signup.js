const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const inputPasswordConfirm = document.querySelector(".input-signup-password-confirm");
const btnRegister = document.querySelector(".signup__signInButton");

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();

  const email = inputUsernameRegister.value;
  const password = inputPasswordRegister.value;
  const confirmPassword = inputPasswordConfirm.value;

  if (email === "") {
    alert("Email không được để trống");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Email không hợp lệ");
    return;
  }

  if (password === "" || confirmPassword === "") {
    alert("Mật khẩu không được để trống");
    return;
  }

  if (password !== confirmPassword) {
    alert("Mật khẩu và mật khẩu xác nhận không khớp");
    return;
  }

  const existingUser = localStorage.getItem(email);
  if (existingUser) {
    alert("Tài khoản này đã tồn tại");
  } else {

    const user = {
      username: email,
      password: password,
    };
    localStorage.setItem(email, JSON.stringify(user));
    alert("Đăng Ký Thành Công");
    window.location.href = "login.html";
  }
});