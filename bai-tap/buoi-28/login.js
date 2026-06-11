async function handleLogin({ username, password }) {
    try {
        const res = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username,
                password,
                expiresInMins: 5,
            }),
        });

        if (res.status !== 200) {
            return null;
        }

        const data = await res.json();
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);

        console.log(data);

        return data;
    } catch (error) {
        console.log(error);
    }
}
// handleLogin({ username: "emilys", password: "emilyspass" });

// get elements
const formLogin = document.getElementById("form-login");
const username = document.getElementById("username");
const passwordEle = document.getElementById("password");

formLogin.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const dataValue = {
            username: username.value.trim(),
            password: passwordEle.value.trim(),
        };
        const data = await handleLogin(dataValue);
        if (!data) {
            alert("Thông tin đăng nhập sai vui lòng thử lại!");
            return;
        }
        alert("Đăng nhập thành công!");
        window.location.href = "profile.html";
    } catch (error) {
        console.log(error);
    }
});
