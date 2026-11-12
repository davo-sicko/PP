export const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const validatePhone = (phone) => /^\+?[1-9]\d{10,14}$/.test(phone);
export const validateUsername = (username) => /^[a-zA-Z0-9_]{3,50}$/.test(username);
export const validatePassword = (password) => password.length >= 8;