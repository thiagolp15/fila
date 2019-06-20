class StaticQueue{
    constructor(){
        this.data = [];
    }
    //método que coloca um elemento na fila; recebendo como parametro element
    enqueue(element) {
        this.data.push(element);
    }
    //método que tira um elemento da fila
    dequeue(){
        return this.data.shift();
    }
    //mostra o primeiro elemento
    front() {
        return this.data[0];
    }
     //mostra o ultimo elemento
    back(){
        return this.data[this.data.length-1];
    }
    //método que verifica se a fila está vazia.
    isEmpty() {
        return (this.data.length===0);
    }
       //método que exibe tamanho da fila
    size() {
        return this.data.length;
    }
        //método que limpa a pilha.
    clear() {
        this.data = [];
    }
    //vai adicinar um separator para melhor organizar a fila
    print(separator=" - ") {
        return this.data.join(separator);
    }
}