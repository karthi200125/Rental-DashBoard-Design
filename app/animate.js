export const slideUp = {
    initial: {
        y: "-100%"
    },
    open: (i) => ({
        y: "0%",
        transition: { duration: 0.7, delay: 0.07 * i }
    }),
    closed: {
        y: "-100%",
        transition: { duration: 0.5 }
    }
};


export const perspective = {
    initial: {
        opacity: 0,
        translateY: 600,
    },
    enter: (i) => ({
        opacity: 1,
        translateY: 0,
        transition: {
            delay: 0.6 + (i * 0.1),
            opacity: { duration: 0.5 },
            duration: 1,
            ease: [.255, .61, .355, 1]
        }
    }),
    exit: {
        opacity: 0
    }
};

export const LeftToRight = {
    initial: {
        opacity: 0,
        translateX: -200,
    },
    enter: (i) => ({
        opacity: 1,
        translateX: 0,
        transition: {
            delay: 0.6 + (i * 0.1),
            opacity: { duration: 0.5 },
            duration: 1,
            ease: [.255, .61, .355, 1]
        }
    }),
    exit: {
        opacity: 0
    }
};

// animate.js
export const TopToBottom = {
    initial: {
        opacity: 0,
        translateY: -100,
    },
    enter: (i) => ({
        opacity: 1,
        translateY: 0,
        transition: {
            delay: 0.6 + (i * 0.1),
            opacity: { duration: 0.5 },
            duration: 1,
            ease: [.255, .61, .355, 1]
        }
    }),
    exit: {
        opacity: 0
    }
};

export const BottomToTop = {
    initial: {
        opacity: 0,
        translateY: -100,
    },
    enter: (i) => ({
        opacity: 1,
        translateY: 0,
        transition: {
            delay: 0.6 + (i * 0.1),
            opacity: { duration: 0.5 },
            duration: 1,
            ease: [.255, .61, .355, 1]
        }
    }),
    exit: {
        opacity: 0
    }
};


