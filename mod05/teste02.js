/**
 * Dado o objeto animal = {_id: '123', get id() {return this._id } }, qual será o resultado quando executar console.log(animal.id)?
 */

const animal = {
    _id:'123', 
    get id(){
        return this._id
    }
}

console.log(animal.id)