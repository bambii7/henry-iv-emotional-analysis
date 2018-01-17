
class PlayFormat {
    static ACT = /^ACT\ (I|V|X|L|C|D|M)+$/i;

    static SCENE = /^SCENE\ (I|V|X|L|C|D|M)+\.(.+)/i;

    isAct(text) {
        return PlayFormat.ACT.test(text);
    }

    isScene(text) {
        return PlayFormat.SCENE.test(text);
    }
}

export default PlayFormat;
