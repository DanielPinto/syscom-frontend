const apiLink = () => {

    const mode = 0

    const production = "https://syscom.danptec.com";

    const dev = "http://localhost:8000";

    return mode === 1 ? production : dev;
}

export default apiLink;