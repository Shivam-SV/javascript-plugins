var {query} = require('./db');

const model = {
    table: null,
    useTable(tableName){
        this.table = tableName;
    },
    async all(){        
        return await query(`SELECT * FROM ${this.table}`);
    }
}

module.exports.model = model;