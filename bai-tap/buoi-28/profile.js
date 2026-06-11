async function getCurrenUser() {
    let accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    const res = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (res.status === 401) {
        try {
            const refreshRes = await fetch(
                "https://dummyjson.com/auth/refresh",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        refreshToken: refreshToken,
                        expiresInMins: 5,
                    }),
                },
            );

            if (refreshRes.status !== 200) {
                return null;
            }

            const refreshData = await refreshRes.json();
            localStorage.setItem("accessToken", refreshData.accessToken);
            localStorage.setItem("refreshToken", refreshData.refreshToken);

            // call back api currenUser
            accessToken = localStorage.getItem("accessToken");
            const retryRes = await fetch("https://dummyjson.com/auth/me", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (retryRes.status !== 200) {
                return null;
            }

            return await retryRes.json();
        } catch (error) {
            console.log(error);

            return null;
        }
    }

    return await res.json();
}

// get elements
const profileAvatar = document.querySelector(".profile-avatar");
const profileUsername = document.querySelector(".profile-username");
const profileEmail = document.querySelector(".profile-email");

// main
async function main() {
    const user = await getCurrenUser();

    if (!user) {
        alert("Phiên đăng nhập hết hạn, vui lòng đăng nhập lại");
        window.location.href = "index.html";
        return;
    }
    renderUser(user);
}

// render user
function renderUser(user) {
    profileAvatar.src = user.image;
    profileUsername.textContent = user.username;
    profileEmail.textContent = user.email;
}
main();
