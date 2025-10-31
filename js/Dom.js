class Dom {
/**
 * 
 * @param {Text} ele 作成要素のhtmlタグ
 * @param {Text} origin_id 親とする要素のid
 * @param {JSON} attribute 変更する要素を配列で
 */
async create (ele,origin_id,attribute) {
    const element = document.createElement(ele);
    
    for (let key in attribute){
        element.setAttribute(key,attribute[key]);
    }

    document.getElementById(origin_id).appendChild(element);
}
/**
 * 
 * @param {Text} dom 検知する要素のid
 * @param {Function} dothing クリックされた場合の動作
 * @param {Boolean} One 一度のみの実行か
 */
clicked (dom,dothing,One){
    document.addEventListener("DOMContentLoaded",(dom) => {
    if (dom) {
        dom.addEventListener("click", () => {
            dothing();
        }, { once: One})
    }
    })
}
}

export default Dom;