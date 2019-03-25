export default function fileUploadStatus(state, action) {
    switch (action.type)
    {
        case "UPLOAD_STARTED":
        case "UPLOADED":
            return { ...state, isLoading: action.isLoading };
        default:
            return state;
    }
}