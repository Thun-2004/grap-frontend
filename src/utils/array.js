
export const remove = (array, element) => {
    if (array.length === 0) {
        return array;
    }
    return array.filter(item => item !== element); 
}