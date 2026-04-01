const umnožak = (a) => {
    return (b)  => {
        return (c) => {
            return a*b*c
        }
    }
}

console.log(umnožak(1)(2)(3))
