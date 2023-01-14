export const calcular = expressao => {
    expressao = expressao.replaceAll('÷', '/')
    expressao = expressao.replaceAll('x', '*')
    return eval(expressao)
}
