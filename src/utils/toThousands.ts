function formatNumberToThousands(num: number): string {
    if (typeof (num) != 'number' || isNaN(num)) {
        throw new Error('必须是一个有效数字')
    }

    const [integePart, decimalPart] = num.toString().split('.') // 124131,334.5

    let formatterInteger = ''

    for (let i = integePart.length - 1; i >= 0; i--) {
        formatterInteger = integePart[i] + formatterInteger
        if ((integePart.length - i) % 3 === 0 && i !== 0) {
            formatterInteger = ',' + formatterInteger
        }
    }

    return decimalPart ? `${formatterInteger}.${decimalPart}` : formatterInteger

}

export default formatNumberToThousands

