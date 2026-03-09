// type enum

// enumerar tipos de dados

enum DesignColors{ //cria diretamente com as chaves como se fosse uma classe
    white = "#FFFFF",
    black = "#00000"
}

console.log(DesignColors.white)

enum StatusPermission{ 
    ADMIN, // Devolve 0
    USER, // Devolve 1
    SUPPORT // Devolve 2
}

console.log(StatusPermission.ADMIN)
console.log(StatusPermission.USER)
console.log(StatusPermission.SUPPORT)

// tambem pode passar os valores que quiser
enum BossaNova{
    Brasileira = 1,
    Japonesa = 2,
}

console.log(BossaNova.Brasileira)
console.log(BossaNova.Japonesa)