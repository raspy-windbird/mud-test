const background = {
    boot: (elem)=> {
        anime.set(elem,
            {
                translateX: 0,
            }
        );
        anime({
            targets: elem,
            translateX: 250,             
        })
    },
}

const Doanime = {
    background: background,

}


export default Doanime;