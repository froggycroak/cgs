function closePage() {
    window.close();
    if (history.length > 1) {
        history.back();
    }
}
