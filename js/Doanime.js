const Doanime = {
    background: background,

}

const background = {
    boot: (elem)=> anime({
        targets: elem,
        translateX: 250                
    }),
}
export default Doanime;