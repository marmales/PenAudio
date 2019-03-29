export const updateLoadingStatus = isLoading => {
    return { type: "LOADING_STATUS", isLoading };
};

export const updateCurrentFile = file => {
    return { type: "UPLOAD_STATUS", file };
};
