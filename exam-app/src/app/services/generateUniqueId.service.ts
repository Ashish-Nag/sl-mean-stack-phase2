export function generateId (len: number) : string {
    let characters: string = "abcdefghijklmnopqrstuvwxyz0123456789";
    let id:string = '';
    for(let i = 0; i <=len; i++) {
        id += characters.charAt(Math.floor(Math.random()* (characters.length+1)));
    }
    return id;
}