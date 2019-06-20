//criando a classe  DynamicQueue
class DynamicQueue{
    //iniciando tamanho da fila 0,head e tal serão null.
//o mesmo comando foi chamado no metodo clear.
    constructor(){
        this.head = null;//cabeça recebe null
        this.tail = null;//calda recebe null
        this.length = 0;//tamanho recebe zero
    }

    enqueue(element) {
        //aqui será inserido um novo elemento na fila 
        let node = new Node(element);//instalanciando elemento 
        if(this.isEmpty()){//caso o inicio não esteja vazio
            this.head=node;//o próximo numero a ser inserido será no inicio 
        }else{
            this.tail.next = node;
        }
        this.tail = node;//tail recebe o nó
        this.length++;//é incrementado o tamanho da fila 
    }
  //método que tira um elemento da fila
    dequeue(){
        let deadElement = null;//deadEleemnt recebendo null
        if(this.length===1){//perguntando se tamanho é igual a 1
            deadElement = this.tail.content;//se sim,é tanto tcabeça como calda
            this.clear();//então ele limpa
        }else if(this.length>1){//se for maior que 1
            let deadNode = this.head;//cria uma variavel pra receber a cabeça
            this.head = this.head.next;//cabeça recebe a referencia do proximo 
            deadNode.next = null;//o elemento que vai ser excluido recebe null
            deadElement = deadNode.content;//uma variavel ta recebendo o valor pra retornalo depois
            this.length--;//tamanho do array decrementa 1
        }
        return deadElement;
    }
    //mostra o primeiro elemento
    front() {
        return this.head.content;
    }
    //mostra o ultimo elemento
    back() {
        return this.tail.content;
    }
    isEmpty() {
        //método que verifica se o final está vazio
        return this.tail===null;
    }
     //método que exibe o tamanho da fila
    size() {
        return this.length;
    }
    //método que limpa a fila
    clear() {
        this.tail= this.head=null;
        this.length=0;
    }
    //adicionando separator para melhor organizar a fila 
    print(separator=" - ") {//adicionando "-" ao separator
        let output = "";
        for (let node = this.head; node!=null; node = node.next) {//vai adicionar o valor mais o separator e o proximo numero
            output+=node.content+separator;
        }
        return output.substr(0, output.length-separator.length);//aqui ele vai tirar o separator que vai sobrar no final e vai mostrar a fila
    }
}