export const validateTypeField = (type: string): { succeeded: boolean; errorMessage?: string } => {
    if (!type) {
        return { succeeded: false, errorMessage: "Type is required." };
    }
    if (type.length < 3) {
        return { succeeded: false, errorMessage: "Type must be at least 3 characters long." };
    }
    return { succeeded: true };
}

export const validateNameField = (name: string): { succeeded: boolean; errorMessage?: string } => {
    if (!name) {
        return { succeeded: false, errorMessage: "Name is required." };
    }
    if (name.length < 3) {
        return { succeeded: false, errorMessage: "Name must be at least 3 characters long." };
    }
    return { succeeded: true };
}