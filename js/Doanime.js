const timeline = createtimeline()

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

//再読込時にうまくいかない
//chatgptに聞いてみる

const Doanime = {
    background: background,

}


export default Doanime;