interface filterResultType {
    result: any[],
    exclude: any[],
}

export const filterResult = ({result, exclude} : filterResultType) => {
    const filterRes = result.filter(item => {
        return !exclude.includes(item);
    });

    return filterRes;
}