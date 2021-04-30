import moment from "moment"

export const prepareOperations = (operations = []) => {
    return operations.map(
        (e) => ({
            ...e,
            date: moment(e.date).toDate()
        })
    );
}