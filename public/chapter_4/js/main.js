let bgm = document.getElementById('bgm');
		function playSound(){
			bgm.play();
			bgm.volume = 0.6;
		}
      
        let gmbr = document.getElementById("batu");
        gmbr.addEventListener("click", 
            event => {
                gmbr.style.background = "blanchedalmond";
            }
        ) 

        let gmbr1 = document.getElementById("kertas");
        gmbr1.addEventListener("click", 
            event => {
                gmbr1.style.background = "blanchedalmond";
            }
        ) 

        let gmbr2 = document.getElementById("gunting");
        gmbr2.addEventListener("click", 
            event => {
                gmbr2.style.background = "blanchedalmond";
            }
        ) 


class Start {
    // menetapkan data yang akan diolah
    constructor(){
        this.pilihanBot = '';
        this.pilihanPemain = '';
        //...... kode update
        this.scoreBot = 0;
        this.scorePemain = 0;
        //...... kode update
    }

    // membuat method untuk otak-bot
    otakBot() {
        const opsi = ["👋","✌","✊"];
        const pilihanBot = Math.floor(Math.random() * opsi.length);

        this.pilihanBot = opsi[pilihanBot];

        return opsi[pilihanBot];
    }

    // disini lanjut kode
    // membuat method untuk menentukan pemenang
    hasilPemenang(){
        const pemain = this.pilihanPemain;
        const bot = this.pilihanBot;

        if (pemain === "👋" && bot === "👋"){
            return ('DRAW');
            console.log("Player 1 kertas dan COMPUTER kertas hasilnya :");
            console.log("DRAW");
            
            
        }
        if (pemain === "✌" && bot === "✌"){
            console.log("Player 1 gunting dan COMPUTER gunting hasilnya :");
            console.log("DRAW");
            return ('DRAW');
            
            
        }
        if (pemain === "✊" && bot === "✊"){
            console.log("Player 1 batu dan COMPUTER batu hasilnya :");
            console.log("DRAW");
            return ('DRAW');
            
           
        }

        if (pemain === "👋" && bot === "✌"){
            this.scoreBot++;
            console.log("Player 1 kertas dan COMPUTER gunting hasilnya :");
            console.log("COM WIN");
            return ('COMPUTER WIN');
            
           
        }
        if (pemain === "👋" && bot === "✊"){
            this.scorePemain++;
            console.log("Player 1 kertas dan COMPUTER batu hasilnya :");
            console.log("PLAYER 1 WIN");
            return ('PLAYER 1 WIN');
        }
        if (pemain === "✌" && bot === "👋"){
            this.scorePemain++;
            console.log("Player 1 gunting dan COMPUTER kertas hasilnya :");
            console.log("PLAYER 1 WIN");
            return ('PLAYER 1 WIN');
        }
        if (pemain === "✌" && bot === "✊"){
            this.scoreBot++;
            console.log("Player 1 gunting dan COMPUTER batu hasilnya :");
            console.log("COMPUTER WIN");
            return ('COM WIN');
        }
        if (pemain === "✊" && bot === "👋"){
            this.scoreBot++
            console.log("Player 1 batu dan COMPUTER kertas hasilnya :");
            console.log("COMPUTER WIN");
            return ('COM WIN');
        }
        if (pemain === "✊" && bot === "✌")	{
            this.scorePemain++
            console.log("Player 1 batu dan COMPUTER gunting hasilnya :");
            console.log("PLAYER 1 WIN");
            return ('PLAYER 1 WIN');
        }
    }


}

// tambah kode ini setelah tutup class start ( } ).
let mulaiGame = new Start;


// membuat fungsi untuk mendapatkan  pilihan pemain
// dan menjalankan permainan
function ambilPilihan(pilihanPemain) {
    // .............
    // let mulaiGame = new Start;
    // ambil sumber audio
    let clickSound = document.getElementById('clickSound');
    // putar saar di klik
    clickSound.play();
    //................

    mulaiGame.otakBot();
    mulaiGame.pilihanPemain = pilihanPemain;

   // menngganti isi element tampilPilihan denga string baru
   tampilPilihan.textContent = `${pilihanPemain} VS ${mulaiGame.pilihanBot}`;

   // menandai tempat dimana hasil permainan akan ditampilkan
   let tampilHasil = document.getElementById('hasilPermainan');

   // mengganti isinya dengan string baru 
   tampilHasil.textContent = `${mulaiGame.hasilPemenang()}`;
   //...................update code
   document.getElementById('score').textContent =`Score ${mulaiGame.scorePemain}:${mulaiGame.scoreBot}`;



    //........................update code
}
function ulangi(){
    // reset score bot ke 0
    mulaiGame.scoreBot = 0;
    // reset score pemain ke 0
    mulaiGame.scorePemain = 0;


    // reset nama pemain
    tampilPilihan.textContent = '..VS..';

    // reset tampilkan score
    document.getElementById('score').textContent = `Score 0:0`;
    // reset tampilkan hasil permainan
    document.getElementById('hasilPermainan').textContent = '';
}