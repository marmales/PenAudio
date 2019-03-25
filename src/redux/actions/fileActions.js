export function startLoading() {
    return { type: "UPLOAD_STARTED", isLoading: true};
}

export function stopLoading() {
    return { type: "UPLOADED", isLoading: false};
}
