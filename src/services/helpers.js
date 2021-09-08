export const getNameForFetch = (arr) => {

    if(arr.length) {
        return arr[0].split('/').slice(-1);
    };
};

export default getNameForFetch;