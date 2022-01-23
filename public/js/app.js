// álbum de fotografias
var app_photografy = new Vue({
  el: "#app_photography",
  data: {
    photography: [
      {
        image:
          "https://scontent.flim16-1.fna.fbcdn.net/v/t1.15752-9/263184930_630957581416101_496394036995339110_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeGbzD-juiS-M3pw3W8Hal3WGiyqr-G2EZ8aLKqv4bYRn1O53-vL3_-XzVo5Ctpwx7Y91rW-mqPja4qxCsXzcMDL&_nc_ohc=08l03AXGmq0AX-4rtRK&_nc_ht=scontent.flim16-1.fna&oh=03_AVKngsrIZb897EMSu1U9lLEpfctyaFArEU-15HIavRqqig&oe=621202E1",
        title: "Puente de Chanchas 😱",
        date: "diciembre 2021"
      },
      {
        image:
          "https://scontent.flim16-1.fna.fbcdn.net/v/t1.15752-9/267891492_415089327025082_8250793643504469535_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFdxwJyzQjUc9y1SjDObdsAxIgDtT3pi-PEiAO1PemL44WIJtzkEnzDLcKuzcXEAJeR_weYhw6Gb9wB4Yzg54sX&_nc_ohc=jkgi8TnmoNsAX8AxXpk&_nc_ht=scontent.flim16-1.fna&oh=03_AVJqYbff72yOGn0NV22_Kc5gck0PLU4ziUaeykZD99U3Sw&oe=6213877F",
        title: "Jugando al avioncito ✈.",
        date: "26 diciembre 2021 (Bosque Dorado)"
      },
      {
        image:
          "https://scontent.flim16-2.fna.fbcdn.net/v/t1.15752-9/267438506_432475531845099_2936845262235165524_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeGWGYj3ZUsMhcvSJH8zJ_p4pEgNF54t--WkSA0Xni375duM_tXDLJyd7B8Yhbiap6MYIQI0SNOdiZUbEyxY8ZVC&_nc_ohc=Hsjn4dPYmp0AX-dTc8j&_nc_ht=scontent.flim16-2.fna&oh=03_AVJx7XKISm4AruM_ojQNNJdc8oyVjN92trDbFnq8HUlMfA&oe=62110D2A",
        title: "Besitos robados 🤭.",
        date: "26 diciembre 2021 (Bosque Dorado)"
      },
      {
        image:
          "https://scontent.flim16-2.fna.fbcdn.net/v/t1.15752-9/268144799_286603573485472_692359897289923358_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeHLsmBbWuMY-XS9_-dNnUx2IytX3Cp8JPMjK1fcKnwk86a27vUzRSqrDOhgUuyrlzYX25ukmrpGMyQybEzBdLLT&_nc_ohc=tumqKnCm65QAX_PvSu6&_nc_ht=scontent.flim16-2.fna&oh=03_AVKU9jx8yQLnaj0JqtN9zsqeIZvxN__HbCzl686wDiEIqw&oe=62115D84",
        title: "Adan y Eva en el arbol prohibido 😅.",
        date: "26 diciembre 2021 (Bosque Dorado)"
      },
      {
        image:
          "https://scontent.flim16-2.fna.fbcdn.net/v/t1.15752-9/264913453_324712119501470_279754214427452449_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeGEfypaEeBNELBktsI6pum46ctL_-FBCx3py0v_4UELHVpTmpASSdU6xYRPRHzj7oIU8MH91F-eyPB8dXHBX-FW&_nc_ohc=4jutxrOwaAkAX_EaR5c&_nc_ht=scontent.flim16-2.fna&oh=03_AVLCgK8_4OANKn04ePFV5JIYHBJ7Otp8B6tvS2eXiHQp_w&oe=621147F4",
        title: "Viendo nuestro futuro 😎.",
        date: "26 diciembre 2021 (Bosque Dorado)"
      },
      {
        image:
          "https://scontent.flim16-2.fna.fbcdn.net/v/t1.15752-9/265706580_659328265242683_8050461470111567412_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeGrpKBMkNv96c6RKK10tchmbkU8n1cGn4ZuRTyfVwafhhjbCTTjFp4QwCFeS8ytnlEzTO3SBdeS2aQ4n-pd7Hgw&_nc_ohc=ZNYUlh74IN4AX812wQz&_nc_ht=scontent.flim16-2.fna&oh=03_AVLowbykgHdABEsKm53wHAaaPDEhHT8VlICUZux133KDNg&oe=6214A205",
        title: "Gracias por esas sonrisas que me dan 🤗.",
        date: "26 diciembre 2021 (Bosque Dorado)"
      },
      {
        image:
          "https://scontent.flim16-2.fna.fbcdn.net/v/t1.15752-9/266315991_320836199755214_6319157901202878615_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFOr0VMAk3KW8n8B1MkPHIW5rKMTdMWjSrmsoxN0xaNKg_GldHk_LqNYRlLCEmTVKzC9obUBkbx7vcT8LYIjDSs&_nc_ohc=VchKgQh5QosAX_3YF9J&_nc_ht=scontent.flim16-2.fna&oh=03_AVIS6M6Iys1F5ef2u8YWskr2y5uLg9V0_JyCmeprbWH5ug&oe=6212358B",
        title: "Naturalmente yo mismo ^^.",
        date: "26 diciembre 2021 (Bosque Dorado)"
      },
      {
        image:
          "https://scontent.flim16-3.fna.fbcdn.net/v/t1.15752-9/269285043_377032084223258_7821111208057378567_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeGznqAZ_za3s1NfnC98waK_4ATqa3bkaYzgBOprduRpjKvgC9qw1oubvtf7pme17ed4kUJuoq7p7VIc_tV0c7lk&_nc_ohc=CSxGI6x0bQoAX9X5DO0&tn=c0uqfkd88MOa7LXo&_nc_ht=scontent.flim16-3.fna&oh=03_AVLt_foy5R3hYUWvPAyt-4EST82jdGiaFuqGhgrRrAsJrw&oe=62145633",
        title: "Recordando la infancia juntos 🥳",
        date: ""
      },
      {
        image:
          "https://scontent.flim16-2.fna.fbcdn.net/v/t1.15752-9/271886839_347790973592260_7512995181025434150_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeG33ylwVTO77y2vftYto-lEEwhRe_t61_ETCFF7-3rX8XZ5wkWkpJ-vKozobvZDI89k9p7eQhzqRyAbbzUVENJw&_nc_ohc=QUj6WiiHxawAX9kLjsY&_nc_ht=scontent.flim16-2.fna&oh=03_AVKOwMdulImfPveApgUu7q1sV73vOzvyhItDivuhMPsR8Q&oe=62142E22",
        title: "Noche de Películas 🎥.",
        date: "9 enero 2022"
      },
      {
        image:
          "https://lh3.googleusercontent.com/zZKAenXwkf0MzdeqcQinwqNIVktw8Atr2DoLSJpsx7HkqkinWnibj3dNq41HBkKKfGd4mbMjHh64F-8jWv2TtNYa2gwBDISoJtwm2iUroxApr976RbqkQjZCv4QZ9OSwtjDfo_HPRD3z55Kpz0ecPWMd6WVzLvEA-lQee8uSBMaWAdlZTQ4nxCnl5Fo5aLYaeyPkzTWGwUFNzFdfZvLq02zwX96nTmXnFdXh77j_o-b6ksWwIuEU0OdPcuZXsfOtE5KY8QFS7ncGeIhzcOYPSpnlEKznPrfTQ009glULP1r9_SGtxYNQRVuvddJcpuVp6DMzohP406nAvw32ze74X9Xw2W8HtgomQKGMV8UXVfvrE_BEurP47_N3NIb2BKEbN4b0NyBqdRRQKD-J3b2bORoOylFenyj_perPdDPu0gPYtDdfDj1BIWASECXE9RS7X9q15zCRjQ_5ssMfuMREWRXqLZDPDemyWyjwoNtHAYfJHPL86VDpKCfDTMiysvNhgZxr91UU4yRjAtd7ZwLQmg3mAcREBNRQwtNtZGciEvyQK3LLZUf8jnGmGHkn2_J72tYjvXR2q4gfhlIbkph4OYLnSPxzAEsdZVLLf1RCIFl2_auICuqq_GwfhKs41NPPWXYA5ZgsglKOosdXFuoEY3vuxlbZiV7uLBnwqF9Shp_sSmpbKocantzgztRRgCeIlavOxu1QC93FXNvRuSzeKH0G=w541-h721-no?authuser=0",
        title: "Besos que llegan al corazón 💕.",
        date: "17 enero 2022"
      },
      {
        image:
          "https://scontent.flim16-3.fna.fbcdn.net/v/t1.15752-9/271528218_1306443109830652_346969069582070054_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFAbNSxXbcptzgRENz6FYD2jyzZiqbXZmKPLNmKptdmYlc9YDjRWBtkTvARsOAALe8tVk2nYv8hzke0U8-1DGFQ&_nc_ohc=kMK4k6AkgaYAX-xMEqg&_nc_ht=scontent.flim16-3.fna&oh=03_AVJEgmCJzD8H1tocBsk1SkxTwxoLBObPXdE_Ry7KcwiIzg&oe=62146E41",
        title: "Mi reina, lleve su batimix 😆",
        date: "19 enero 2022"
      },
      {
        image:
          "https://scontent.flim16-1.fna.fbcdn.net/v/t1.15752-9/271550510_329868522352220_4293761035216978505_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFQz42E6QnMZB6oZoXDYQxJ77_tmpGXuojvv-2akZe6iBeQZQ2-DujepCq1aolir36GPEYXclI6J7KtT9ER_U8h&_nc_ohc=iz1-JT9WK-MAX8jBQWv&_nc_ht=scontent.flim16-1.fna&oh=03_AVKqY5b0fdycxKYorvqi15xYjD3vK-q6g9hfNcKAmRAfiQ&oe=62136462",
        title: "Dos bellas durmientes 👀.",
        date: "20 enero 2022"
      }
    ]
  }
});
