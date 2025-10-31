/*
class Dom {
/**
 * 
 * @param {Text} ele 作成要素のhtmlタグ
 * @param {Text} origin_id 親とする要素のid
 * @param {JSON} attribute 変更する要素を配列で
 */
/*
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
/*
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
*/
class Dom {
    /**
     * 要素を作成し、親要素に追加する
     * @param {string} tagName 作成する要素のHTMLタグ名（例: 'div', 'p'）
     * @param {HTMLElement|string} parent 親となる要素のオブジェクトまたはID文字列
     * @param {object} [attributes] 設定する属性のキーと値のペアを持つオブジェクト
     * @param {string} [textContent] 要素のテキストコンテンツ
     * @returns {HTMLElement|null} 作成された要素、または親要素が見つからない場合はnull
     */
    create(tagName, parent, attributes = {}, textContent = '') {
        const element = document.createElement(tagName);

        for (const key in attributes) {
            if (Object.hasOwnProperty.call(attributes, key)) {
                element.setAttribute(key, attributes[key]);
            }
        }

        if (textContent) {
            element.textContent = textContent;
        }

        let parentElement;
        if (typeof parent === 'string') {
            parentElement = document.getElementById(parent);
        } else if (parent instanceof HTMLElement) {
            parentElement = parent;
        }

        if (parentElement) {
            parentElement.appendChild(element);
            return element;
        } else {
            console.error('親要素が見つかりませんでした。', parent);
            return null;
        }
    }

    /**
     * 指定した要素にクリックイベントリスナーを追加する
     * @param {string|HTMLElement} target 検知する要素のIDまたは要素オブジェクト
     * @param {Function} doThing クリックされた場合に実行する関数
     * @param {boolean} [oneTime=false] 一度のみの実行か
     * @returns {void}
     */
    clicked(target, doThing, oneTime = false) {
        let element;
        if (typeof target === 'string') {
            element = document.getElementById(target);
        } else if (target instanceof HTMLElement) {
            element = target;
        }

        if (element) {
            // doThingに関数そのものを渡し、イベントオブジェクトを受け取れるようにする
            element.addEventListener("click", doThing, { once: oneTime });
        } else {
            console.error('対象の要素が見つかりませんでした。', target);
        }
    }

    /**
     * 指定したセレクターに一致する最初の要素を取得する
     * @param {string} selector CSSセレクター文字列
     * @returns {HTMLElement|null} 見つかった要素、またはnull
     */
    get(selector) {
        return document.querySelector(selector);
    }

    /**
     * 指定したIDの要素をDOMから削除する
     * @param {string} id 削除する要素のID
     */
    remove(id) {
        const element = document.getElementById(id);
        if (element && element.parentNode) {
            element.parentNode.removeChild(element);
        } else {
            console.error('削除対象の要素が見つかりませんでした。', id);
        }
    }
}

export default Dom;