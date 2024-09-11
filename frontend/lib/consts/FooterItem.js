import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export const footerItem = [
  {
    title: "CookMaster",
    subtitle: ["Hakkımızda", "Hizmetlerimiz", "Gizlilik Politikası"],
  },
  {
    title: "Yardım Alın",
    subtitle: [
      "Sıkça Sorulan Sorular",
      "Satın Alımlar",
      "Geri Dönüşler",
      "Ödeme Yöntemleri",
    ],
  },
  {
    title: "İletişim",
    subtitle: ["Telefon", "E-Mail"],
  },
  {
    title: "Bizi Takip Edin",
    icon: [
      {
        icon: [
          <FaTwitter size={20} fill="white" />,
          <FaLinkedin size={20} fill="white" />,
          <FaGithub size={20} fill="white" />,
        ],
      },
    ],
  },
];
