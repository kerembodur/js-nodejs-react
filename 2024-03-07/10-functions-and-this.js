let kullanici = {
  isim: "Kerem",
  yas: 33,

  selamVer() {
    console.log(this.isim);
    console.log(this);
  }

};

kullanici.selamVer(); // Kerem