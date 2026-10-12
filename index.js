







function createLoginTracker(userInfo) {
    let attemptCount = 0;

    const login = (passwordAttempt) => {
        // Lock the account after 3 incorrect passwords
        if (attemptCount >= 3) {
            return "Account locked due to too many failed login attempts";
        }

        // Successful login is allowed, even after previous failures
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        }

        // Increment only when the password is incorrect
        attemptCount++;

        return `Attempt ${attemptCount}: Login failed`;
    };

    return login;
}

module.exports = {
    ...(typeof createLoginTracker !== "undefined" && {
        createLoginTracker
    })
};

const userInfo = {
  username: "user1",
  password: "password123"
};

const login = createLoginTracker(userInfo);

console.log(login("wrong"));        // Login attempt 1: Login failed
console.log(login("wrong"));        // Login attempt 2: Login failed
console.log(login("password123"));  // Login successful
console.log(login("password123"));  // Account locked due to too many failed login attempts