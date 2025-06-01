function createPasswordManager() {
  let password = "";
  return {
    setPassword: function (val) {
      if (password !== "") {
        throw new Error("You cannot set password again");
      } else {
        return (password = val);
      }
    },
    verifyPassword: function (val) {
      if (password === val) {
        return true;
      } else {
        return false;
      }
    },
    changePassword: function (oldpass, newpass) {
      if (oldpass === password) {
        return (password = newpass);
      } else {
        return false;
      }
    },
    getMaskPassword: function () {
      return password.replace(/./g, "*");
    },
  };
}
const passwordManager = createPasswordManager();
passwordManager.setPassword("secure123"); // ✅ Password set
// passwordManager.setPassword("newPass"); // ❌ Should not allow reset

console.log(passwordManager.verifyPassword("secure123")); // ✅ true
console.log(passwordManager.verifyPassword("wrongPass")); // ❌ false

passwordManager.changePassword("wrongPass", "newSecure"); // ❌ Should not allow change
passwordManager.changePassword("secure123", "newSecure"); // ✅ Password changed

console.log(passwordManager.getMaskPassword()); // Output: "****"
