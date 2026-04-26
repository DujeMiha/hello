function napraviAuto(
  marka,
  model,
  godiste,
  snagaKW,
  kilometriUnos,
  gorivoUnos,
) {
  let kilometri = kilometriUnos;

  let gorivo = gorivoUnos;

  let prosjecna = function () {
    return 5 + snagaKW * 0.05;
  };

  return {
    marka: marka,
    model: model,
    godiste: godiste,
    snagaKW: snagaKW,
    boja: "Bijela",

    vozi: function (km) {
      let potrosnja = prosjecna();
      kilometri += km;
      gorivo -= km * (potrosnja / 100);
    },
    getKilometri: function () {
      return kilometri;
    },
    getGorivo: function () {
      return gorivo;
    },
    setGorivo: function (novaKolicina) {
      if (novaKolicina < 0 || novaKolicina > 50) {
        console.log("Neispravan unos!");
        return;
      }
      gorivo = novaKolicina;
    },
    info: function () {
      console.log("_____________________________________");
      console.log("________________ Info _______________");
      console.log("_____________________________________");
      console.log(`Marka:     ${this.marka}`);
      console.log(`Model:     ${this.model}`);
      console.log(`Godiste:   ${this.godiste}`);
      console.log(`Snaga:     ${this.snagaKW}`);
      console.log(`Boja:      ${this.boja}`);
      console.log(`Kilometri: ${this.getKilometri()}`);
      console.log(`Gorivo:    ${this.getGorivo()}`);
    },
  };
}

function Auto(marka, model, godiste, snagaKW, kilometriUnos, gorivoUnos) {
  let kilometri = kilometriUnos;

  let gorivo = gorivoUnos;

  let prosjecna = function () {
    return 5 + snagaKW * 0.05;
  };

  this.marka = marka;
  this.model = model;
  this.godiste = godiste;
  this.snagaKW = snagaKW;
  this.boja = "Bijela";

  this.vozi = function (km) {
    let potrosnja = prosjecna();
    kilometri += km;
    gorivo -= km * (potrosnja / 100);
  };

  this.getKilometri = function () {
    return { kilometri: kilometri, potrosnja: prosjecna() };
  };

  this.setKilometri = function (km) {
    kilometri += km;
    gorivo -= km * (potrosnja / 100);
  };

  this.getGorivo = function () {
    return gorivo;
  };

  this.setGorivo = function (novaKolicina) {
    if (novaKolicina < 0 || novaKolicina > 50) {
      console.log("Neispravan unos");
      return;
    }
    gorivo = novaKolicina;
  };

  this.info = function () {
    console.log("_____________________________________");
    console.log("________________ Info _______________");
    console.log("_____________________________________");
    console.log(`Marka: ${this.marka}`);
    console.log(`Model: ${this.model}`);
    console.log(`Godiste:  ${this.godiste}`);
    console.log(`Snaga: ${this.snagaKW}`);
    console.log(`Boja: ${this.boja}`);
    console.log(`Kilometri: ${this.getKilometri().kilometri}`);
    console.log(`Gorivo: ${this.getGorivo()}`);
    console.log(`Potrosnja: ${this.getKilometri().potrosnja}`);
  };
}

const auto1 = new Auto("Toyota", "Corolla", 2007, 90, 100000, 60);
const auto2 = new Auto("BMW", "M5", 2018, 210, 34200, 54);
const auto3 = napraviAuto("Audi", "A8", 2020, 110, 23134, 60);

auto1.vozi(300);
auto2.vozi(500);
auto3.vozi(400);
auto1.info();
auto2.info();
auto3.info();
