// Dummy login
const usernameCorrect = "admin";
const passwordCorrect = "12345";

const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const loginPage = document.getElementById("login-page");
const mainPage = document.getElementById("main-page");
const logoutBtn = document.getElementById("logout-btn");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === usernameCorrect && password === passwordCorrect) {
        loginPage.style.display = "none";
        mainPage.style.display = "block";
    } else {
        loginError.textContent = "Username atau password salah!";
    }
});

// Logout
logoutBtn.addEventListener("click", function() {
    mainPage.style.display = "none";
    loginPage.style.display = "block";
    loginForm.reset();
});

// Unggah Produk
const uploadForm = document.getElementById("upload-form");
const productList = document.getElementById("product-list");

uploadForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("product-name").value;
    const price = document.getElementById("product-price").value;
    const imageInput = document.getElementById("product-image");

    const reader = new FileReader();
    reader.onload = function() {
        const imgSrc = reader.result;

        const div = document.createElement("div");
        div.classList.add("product-item");
        div.innerHTML = `
            <img src="${imgSrc}" alt="${name}">
            <div>
                <p>Nama: ${name}</p>
                <p>Harga: Rp ${price}</p>
            </div>
        `;
        productList.appendChild(div);
        uploadForm.reset();
    }
    if(imageInput.files[0]) {
        reader.readAsDataURL(imageInput.files[0]);
    }
});
