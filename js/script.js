var computerScore = 0;
var playerScore = 0;
var gameOver = 0;
var resultArea = document.getElementById("result");
var scoreTable = document.getElementById("scoreTable");
var newGameButton = document.getElementById("newGame");
var whoWhin = document.getElementById("whoWin");
var results = [
  ["Tie!", "Computer Wins!", "Player Wins!"],
  ["Player Wins!", "Tie!", "Computer Wins!"],
  ["Computer Wins!", "Player Wins!", "Tie!"]
]; // Dizinin 1. indisi kullanıcının 2. indisi ise bilgisayarın seçimi olarak yazıldığında sonuç textine ulaşılıyor.
var choices = ["Rock", "Paper", "Scissors"]; //Seçimi belirlemek için indisle seçeneğe ulaşılıyor.
var winner = [[-1, 0, 1], [1, -1, 1], [0, 1, -1]]; //Dizinin 1. ve 2. indisine göre kazanan bilgisine ulaşılıyor.
function game(choice) {
  if (!gameOver) {
    //Eğer oyun bitmişse yeni oyun başlatana kadar seçimler geçersiz olacak.
    var computer = computerSelector(); //Bilgisayar rastgele bir sayı ile seçeneğini belirliyor.
    var computerChoice = choices[computer]; //Bilgisayarın seçim bilgisine ulaşılıyor.
    var playerChoice = choices[choice]; //Kullanıcının seçim bilgisine ulaşılıyor.
    resultText = results[choice][computer]; //Sonuç textine ulaşılıyor.
    result = winner[choice][computer]; //Sonuç bilgisine ulaşılıyor.
    if (result === -1) {
      //Sonuç -1 ise kazanan yok demektir.
      resultArea.innerHTML = //ResultArea içerisine bilgisayar ve kullanıcının seçimleri yazılıyor.
        "Player's choice: " +
        playerChoice +
        " Computer Choice: " +
        computerChoice +
        ", Tie!";
      //Skorda değişim olmadığından skor tablosunun güncellenmesine gerek yok.
    } else if (result === 0) {
      //Sonuç 0 ise bilgisayar kazanmış demektir.
      resultArea.innerHTML = //ResultArea içerisine bilgisayar ve kullanıcının seçimleri yazılıyor.
        "Player's choice: " +
        playerChoice +
        " Computer Choice: " +
        computerChoice +
        ", Computer Wins!";
      computerScore++; //Bilgisayarın skoru 1 arttırılıyor.
      scoreTable.innerHTML =
        "Computer " + computerScore + "-" + playerScore + " Player"; //Skor tablosu güncelleniyor.
      if (computerScore === 5) {
        //Eğer bilgisayar 5 skoruna ulaşmışsa
        whoWhin.innerHTML = "Computer Wins the Game!"; //Oyunu kazananın bilgisi whoWin idli dive yazılıyor.
        gameOver = 1; //Oyunun bittiği belirtiliyor.
        newGameButton.style.display = "block"; //Yeni oyuna başlama butonu ekrana geliyor.
      }
    } else if (result === 1) {
      //Sonuç 1 ise kullanıcı kazanmış demektir.
      resultArea.innerHTML = //ResultArea içerisine bilgisayar ve kullanıcının seçimleri yazılıyor.
        "Player's choice: " +
        playerChoice +
        " Computer Choice: " +
        computerChoice +
        ", Player Wins!";
      playerScore++; //Oyuncunun skoru 1 arttırılıyor.
      scoreTable.innerHTML =
        "Computer " + computerScore + "-" + playerScore + " Player"; //Skor tablosu güncelleniyor.
      if (playerScore === 5) {
        //Eğer kullanıcı 5 skoruna ulaşmışsa
        whoWhin.innerHTML = "Player Wins the Game!"; //Oyunu kazananın bilgisi whoWin idli dive yazılıyor.
        gameOver = 1;
        newGameButton.style.display = "block"; //New game buttonu gösteriliyor.
      }
    }
  }
}
function newGame() {
  //New game butonuna tıklandığında çalışacak olan fonksiyon.
  gameOver = 0; //gameOver değişkenine 0 atanıp oyunun devam ettiği bilgisi saklanıyor.
  computerScore = 0; //Skorlar güncelleniyor.
  playerScore = 0;
  scoreTable.innerHTML =
    "Computer " + computerScore + "-" + playerScore + " Player"; //Skor tablosu güncelleniyor.
  resultArea.innerHTML = "Please select Rock, Paper or Scissors!"; //Başlangıç texti resultArea'ya yazılıyor.
  whoWhin.innerHTML = "";
}
function computerSelector() {
  return Math.floor(Math.random() * 3); //Bilgisayar 0 ile 2 arasında rastgele bir sayı seçiyor.
}
