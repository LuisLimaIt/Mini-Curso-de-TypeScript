// accountInfo - Informações do user (Nome e-mail, id, etc...)
// charInfo - Informações do personagem
// playerInfo - Conjunto de informações de accountInfo e charInfo

type AccountInfo = {
    id: number;
    name: string;
    email?: string;
};

const account: AccountInfo = {
    id: 123,
    name: "Luis"
};

type CharInfo = {
    nickname: string;
    level: number;
};

const char : CharInfo = {
    nickname: "Luis",
    level: 32
};

//intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    id: 123,
    name: "willian",
    nickname: "willjusten",
    level: 100
};