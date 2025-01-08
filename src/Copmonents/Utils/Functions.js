export const addUser = (username, password) => {
    const userData = {
        username: username,
        pass: password,
        products: []
    };
  
    localStorage.setItem(username, JSON.stringify(userData));
}

export const changePass = (username, newPass) => {
    const userData = JSON.parse(localStorage.getItem(username));
    if (userData) {
        userData.pass = newPass
        localStorage.setItem(username, JSON.stringify(userData));
        console.log(userData);
    } else {
        console.log("Пользователь не найден!");
    }
}

export const getPass = (username) => {
  const userData = JSON.parse(localStorage.getItem(username));
  if (userData) {
      return userData.pass;
  } else {
      console.log("Пользователь не найден!");
  }
}

export const addProduct = (username, product) => {
    const userData = JSON.parse(localStorage.getItem(username));
    if (userData) {
        userData.products.push(product);
        localStorage.setItem(username, JSON.stringify(userData));
    } else {
        console.log("Пользователь не найден!");
    }
}

export const removeProduct = (username, product) => {
    const userData = JSON.parse(localStorage.getItem(username));
    if (userData) {
        userData.products = userData.products.filter(p => p !== product);
        localStorage.setItem(username, JSON.stringify(userData));
    } else {
        console.log("Пользователь не найден!");
    }
}

export class CProduct {
    constructor(productName, src, price) {
        this.productName = productName;
        this.src = src;
        this.price = price;
    }
}