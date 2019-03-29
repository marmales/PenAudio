export default function fileUploadStatus(state, action) {
    switch (action.type)
    {
        case "LOADING_STATUS":
            return { ...state, isLoading: action.isLoading };
        case "UPLOAD_STATUS":
            return { ...state, file: action.file};
        default:
            return state;
    }
}