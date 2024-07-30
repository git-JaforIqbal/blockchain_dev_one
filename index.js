const sha256 = require("crypto-js/sha256");

class Block {
    constructor (timestamp, data, previousHash){
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return sha256(
            this.timestamp+JSON.stringify(this.data)+this.previousHash
        ).toString();
    }
}

class Blockchain {
    constructor(){
        this.chain = [this.generateGenesisBlock()];
    }

    generateGenesisBlock(){
        return new Block("2024-01-01", "GENESIS", "0000");
    }

    getLatestBlock(){
        return this.chain[this.chain.length -1];
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isBlockchainValid(){
        
    }
}

const blockchainCoin = new Blockchain();
const block =  new Block("2024-01-01", {amount:5}, "ABCD");

blockchainCoin.addBlock(block);
console.log(blockchainCoin);