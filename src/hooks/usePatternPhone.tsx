export const usePatternPhone = () => (event: React.ChangeEvent<HTMLInputElement>) => {

    let phone = event.currentTarget.value
    let clearPhone = phone.replace(/[^0-9]/g, '')
    let selectionStart = event.currentTarget.selectionStart
    let formattedPhone = ''

    if (!clearPhone) return ''

    if (phone.length !== selectionStart) {
        if ((event.nativeEvent as any).data && /\D/g.test((event.nativeEvent as any).data)) {
            return clearPhone
        }
        return event.currentTarget.value
    }

    if (['7', '8', '9'].indexOf(clearPhone[0]) > -1) {
        if (clearPhone[0] === '9') clearPhone = '7' + clearPhone
        let firstSymbols = (clearPhone[0] === '8') ? '8' : '+7'
        formattedPhone = firstSymbols + ' '
        if (clearPhone.length > 1) {
            formattedPhone += "(" + clearPhone.substring(1, 4)
        }
        if (clearPhone.length >= 5) {
            formattedPhone += ') ' + clearPhone.substring(4, 7)
        }
        if (clearPhone.length >= 8) {
            formattedPhone += '-' + clearPhone.substring(7, 9)
        }
        if (clearPhone.length >= 10) {
            formattedPhone += '-' + clearPhone.substring(9, 11)
        }
    } else {
        formattedPhone = '+' + clearPhone
    }
    return formattedPhone

};