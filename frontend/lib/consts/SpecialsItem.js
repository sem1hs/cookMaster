import pastaPhoto from "@/public/food/pasta-photo.jpg";
import pizzaPhoto from "@/public/food/pizza-2-photo.jpg";
import chefPhoto from "@/public/food/chef-photo.jpg";

const specialsItem = [
  {
    photo: pastaPhoto,
    title: "Kalite ve Tazelik",
    content:
      "Her malzemeyi özenle seçiyoruz ve sadece en taze ürünleri kullanıyoruz. Mutfaklarımızda kaliteyi her zaman ön planda tutarak, en leziz yemekleri hazırlıyoruz.",
    position: "left",
  },
  {
    photo: chefPhoto,
    title: "Uzman Şefler",
    content:
      "Deneyimli ve yaratıcı şeflerimiz, her tarifte sanatı ve bilimi bir araya getiriyor. Geleneksel tatlardan modern lezzetlere kadar geniş bir yelpazede, benzersiz yemek deneyimleri sunuyoruz.",
    position: "right",
  },
  {
    photo: pizzaPhoto,
    title: "Özgün Tarifler",
    content:
      "Mutfağımızda sıradanlığa yer yok! Kendi geliştirdiğimiz ve sürekli yenilediğimiz özgün tariflerle, alışılmışın dışında lezzetler sunuyoruz.",
    position: "left",
  },
];

export default specialsItem;
