const ValidateToken = status => {
    if (status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = '/login';
    }
}
export default ValidateToken;