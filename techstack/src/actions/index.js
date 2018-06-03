export const selectLibary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};
