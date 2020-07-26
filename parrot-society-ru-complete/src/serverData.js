import annaDark from './images/anna-dark.png';
import annaLight from './images/anna-light.png';
import billDark from './images/bill-dark.png';
import billLight from './images/bill-light.png';

const serverData = {
  "friends": [
    {
      "name": "Саша",
			"id": "0",
      "profilePicDark": billDark,
      "profilePicLight": billLight,
			"location": "Санкт-Петербург, Россия",
			"favBirdQuote": "Красна птица пением, а человек – умением.",
      "parrotsOwned": [
        {
          "name": "Кеша",
          "favoriteToys": [
            "бубенчик",
            "бумажный бантик"
          ]
        },
        {
          "name": "Чарли",
          "favoriteToys": [
            "маленькая чашечка",
            "медвежонок"
          ]
        }
      ]
    },
    {
      "name": "Женя",
			"id": "1",
      "profilePicDark": annaDark,
      "profilePicLight": annaLight,
			"location": "Владивосток, Россия",
			"favBirdQuote": "Лучше синица в руках, чем журавль в небе.",
      "parrotsOwned": [
        {
          "name": "Абрикос",
          "favoriteToys": [
            "карандал",
            "пищалка"
          ]
        }
      ]
    }
  ]
};

export default serverData;

