class AsosCookies {
    get acceptCookieBtn() {
        return $("#onetrust-accept-btn-handler");
    }
    get rejectCookieBtn() {
        return $("#onetrust-reject-all-handler");
    }

}

export default new AsosCookies();