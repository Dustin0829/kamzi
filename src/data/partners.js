export const partners = [
  { name: "Get Wheysted", file: "GET WHEYSTED.jpg" },
  { name: "Basilio Motorshop", file: "BASILIO MOTORSHOP.jpg" },
  { name: "Aratel PH", file: "ARATEL PH.jpg" },
  { name: "The Cleanshop MNL", file: "THE CLEANSHOP MNL.jpg" },
  { name: "Vicscon", file: "vicscon.jpg" },
  { name: "Sear Station PH", file: "SEAR STATION PH.jpg" },
  { name: "Muscle Depot", file: "MUSCLE DEP0T.jpg" },
  { name: "7Twenty7", file: "7twenty7.jpg" },
  { name: "Euros Chocolate", file: "EUROS CHOCOLATE.jpg" },
  { name: "Jeras iPhone", file: "JERAS IPHONE.jpg" },
  { name: "MCars PH", file: "MCARS PH.jpg" },
  { name: "Huescents", file: "HUESCENTS.jpg" },
  { name: "Secret Fresh", file: "secret-fresh.jpg" },
  { name: "Palaya", file: "palaya.jpg" },
  { name: "The Hari Jewelers", file: "THE HARI JEWELERS.jpg" },
  { name: "Keila's Bike Shop", file: "KEILAS BIKE SHOP.jpg" },
  { name: "Choose With Roose", file: "CHOOSEWITHROOSE.jpg" },
  { name: "KCO", file: "kco.jpg" },
  { name: "Wokbang", file: "WOKBANG.jpg" },
  { name: "Offset", file: "offset.jpg" },
  { name: "Corekit MNL", file: "COREKIT MNL.jpg" },
  { name: "RYLR", file: "RYLR.jpg" },
  { name: "Woofgang", file: "WOOFGANG.jpg" },
  { name: "Aftermarket", file: "aftermarket.jpg" },
  { name: "Ang Ninuno", file: "ang-ninuno.jpg" },
  { name: "DCA", file: "dca.jpg" },
  { name: "High Minds", file: "HIGH MINDS.jpg" },
  { name: "Eden's Pastillas", file: "EDENS PASTILLAS.jpg" },
];

export function partnerSrc(file) {
  return `/partners/${encodeURIComponent(file)}`;
}
