
class PlayFormat {
    static ACT = /^ACT\ (I|V|X|L|C|D|M)+$/i;

    isAct(text) {
        return PlayFormat.ACT.test(text);
    }
}

export default PlayFormat;
