const form = {
    email: document.querySelector("#login-username"),
    password: document.querySelector("#login-password"),
    submit: document.querySelector("#login-btn-submit")
};

async function postData(url = "", data = []) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify(data)
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

let button = form.submit.addEventListener("click", (e) => {
    e.preventDefault();
    const login = 'http://localhost:8080/api/user/login';
    postData(login, [form.email.value, form.password.value]).then((data) => {
        if (data == null) {
            alert("gmail hoặc mật khẩu không đúng"); // Hiển thị thông báo lỗi
        } else {
            window.location.href = '../Html/TrangChu.html'; // Chuyển hướng đến trang mục tiêu khi tên đăng nhập và mật khẩu đúng
        }
    }).catch((err) =>{
        console.log(err);
    });
});