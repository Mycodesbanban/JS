export class DataBase {
    private static database:DataBase
    private constructor(private host:string, private user:string , private password:string ){

    }
    connect():void {
        console.log(`Conectado com esses dados ${this.host} ${this.user} ${this.password} `)
    }
    static getDataBase(host:string, user:string, password:string): DataBase {
        if(DataBase.database){
            return DataBase.database
        }
        DataBase.database = new DataBase(host, user, password)
        return DataBase.database
    }
}
const data = DataBase.getDataBase("localhost", "uszumna275478", "bogasujnho2737i")