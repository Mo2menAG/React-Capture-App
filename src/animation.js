export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            wheen: "beforeChildren",
            staggerChildren: 0.35,
        },
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 0.7,
        },
    },
};

export const titleAnimation = {
    hidden: {
        opacity: 0,
        y: 300,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

export const fade = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.7,
        },
    },
};
