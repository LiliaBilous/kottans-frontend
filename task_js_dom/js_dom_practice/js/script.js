window.addEventListener("DOMContentLoaded", () => {
  const contents = [
    {
      title: "Everest",
      subtitle: "Непал/Китай",
      info: "8848 м",
      imgSrc: "img/everest.jpg",
      imgAlt: "Everest",
      description: [
        "Еверест , Джомолунгма або Сагарматха, найвища гора у світі. Її показник – 8848 м. Вершина знаходиться на хребті Гімалаїв Махалангур-Хімал на кордоні Непалу та Китаю. Завдяки статусу найвищої гори Еверест — найпопулярніший вісімтисячник у альпіністів. Піднятися потрібно на 8,5 км, на сходження до вершини потрібно близько двох місяців. Більшість часу витрачається на акліматизацію, підйоми до розбитих на схилах таборах і спуск вниз відпочинку. Підйом на вершину Евересту – важке випробування для будь-якої людини, незалежно від ступеня її підготовки. За час сходження альпініст втрачає близько 15 кг ваги. Загальна вартість експедиції коштує в середньому $90 тис. На даний момент на вершину піднялося близько 10 тис. осіб, близько 200 альпіністів загинули під час сходження.",
      ],
    },
    {
      title: "K2",
      subtitle: "Китай/Пакистан",
      info: "8614 м",
      imgSrc: "img/k2.jpg",
      imgAlt: "K2",
      description: [
        "Чогорі, або К2 — друга за висотою вершина світу. Гора — найпівнічніший «восьмитисячник». Її висота становить 8614 м. Вона знаходиться на кордоні Китаю і Пакистану в гірській системі Каракорум. Чогорі – найскладніша і найнебезпечніша гора у світі для альпіністів. Через те, що гора найпівнічніша серед «вісімтисячників», сходження на неї ускладнює сувора погода та гірська хвороба Смертність серед альпіністів, які намагаються підкорити гору, становить 23%. Сходження взимку межує зі смертельним ризиком та безрозсудною відвагою. Усього здійснено близько 400 спроб сходження. Підйом на Чогорі значно складніший у технічному плані, ніж сходження на Еверест. Ця гора не терпить любителів, а успіху експедиції недостатньо навіть величезного альпіністського досвіду. Необхідно, щоб погода була прихильною до мандрівників.",
      ],
    },
    {
      title: "Kanchenjunga",
      subtitle: "Індія/Непал",
      info: "8586 м",
      imgSrc: "img/Kanchenjunga .jpg",
      imgAlt: "Kanchenjunga",
      description: [
        "Канченджанга – третя за висотою гора Землі, найвища гора Індії. Висота вершини знаходиться на рівні 8586 м над рівнем моря. Розташована на кордоні Індії та Непалу. Вершина височить над гірським масивом Канченджанга у Гімалаях. До 1852 року Канченджанга вважалася найвищою горою у світі. Однак нові експедиції в Гімалаї встановили, що Джомолунгма вищий. Пізніше гору обігнала і Чогорі. Канченджанга – небезпечна гора. Зазвичай смертність під час сходжень знижується завдяки підвищенню заходів безпеки, технічним засобам та сервісам носіїв та рятувальників. Канченджанга – виняток із цього правила. В окремі роки кількість нещасних випадків на ній сягала 22%.",
      ],
    },
    {
      title: "Lhotse",
      subtitle: "Непал/Китай",
      info: "8516 м",
      imgSrc: "img/everest-Lhotse.jpg",
      imgAlt: "Lhotse",
      description: [
        "Лхоцзе – четверта гора у світі за висотою. Її показник – 8516 м. Вона знаходиться на кордоні Китаю і Непалу на гірському хребті Махалангур-Хімал в Гімалаях. Лхоцзе – сусідка Евересту. Серед альпіністів вважається престижним підкорення 14 “восьмитисячників” світу, які називають короною світу. Лхоцзе відділений від Евересту перевалом, тому спортсмени намагаються цю гору підкорити заодно з Джомолунгмою. На Лхоцзі найменша кількість маршрутів для сходження. Гора залишається однією з найбезпечніших для підйому. За час її підкорення загинуло трохи більше 10 альпіністів.",
      ],
    },
    {
      title: "Makalu",
      subtitle: "Непал/Китай",
      info: "8485 м",
      imgSrc: "img/Makalu.jpg",
      imgAlt: "Makalu",
      description: [
        "Макалу – п’ятий за висотою “восьмитисячник” на Землі. Висота гори досягає 8485 м. Знаходиться на кордоні Непалу і Китаю в східній частині хребта Махалангур-Хімал в Гімалаях на відстані 22 км по прямій від Евересту. Макалу відома європейцям із ХІХ століття. Проте до 1950-х років. люди тільки милувалися нею. Гору не намагалися підкорити, оскільки вона залишалася у тіні Джомолунгми. Наразі до вершини гори прокладено 17 маршрутів.",
      ],
    },
    {
      title: "Cho-Oyu",
      subtitle: "Китай/Непал",
      info: "8188 м",
      imgSrc: "img/Cho-Oyu.jpg",
      imgAlt: "Cho-Oyu",
      description: [
        "Чо-Ойю, або Чововуяг, – шоста гора у світі за висотою. Її показник – 8188 м. Гора знаходиться на кордоні Китаю та Непалу в Гімалаях. Чо-Ойю – простий для підкорення «восьмитисячник». Це друга за популярністю гора в десятці найвищих: на її вершину зійшло понад три тисячі людей. На цій горі найнижча смертність – менше 1,5%. Сходження відбувається з боку Тибету, оскільки непальська сторона вкрай складна і доступна лише досвідченим спортсменам. На вершину прокладено 15 маршрутів. Простоту підйому забезпечує торговельна стежка, розташована на найближчому перевалі Нанга-Ла (5716 м). Цей шлях — заслуга шерпів, високогірного народу, без супроводу представників якого не обходиться жодне сходження на вісімтисячники в Гімалаях.",
      ],
    },
    {
      title: "Dhaulagiri",
      subtitle: "Непал",
      info: "8167 м",
      imgSrc: "img/Dhaulagiri.jpg",
      imgAlt: "Dhaulagiri",
      description: [
        "Дхаулагірі – сьома по висоті гора у світі. Височить на 8167 м. Знаходиться повністю на території Непалу в гірському масиві Дхаулагірі. З 1808 по 1832 вершина вважалася найвищою у світі, проте спроб її підкорення вершини не було до 1950-х років. Перша спроба підкорення вершини була здійснена французькою експедицією під керівництвом Моріса Герцога. Проте її учасники не знайшли зручного шляху для сходження і звернули свою увагу на вершину Аннапурна. У 1960 році на базі швейцарської команди була сформована збірна з найкращих альпіністів Європи. Для транспортування експедиції і вантажів використовувався легкий літак (вперше при підкоренні восьмитисячника). Експедицією керував один з учасників невдалої спроби 58-го року Макс Айзелін — автор ідеї сходження по Північно-східному гребеню. 13 травня Курт Дімбергер, Петер Дінер, Албін Шелберт, Ернст Форер і шерпи Наванг і Ньїма Дорджі досягли вершини з табору на висоті 7800 м. Згодом цей маршрут став класичним. Дхаулагірі стала передостанньою підкореною вершиною-восьмитисячником.",
      ],
    },
    {
      title: "Manaslu",
      subtitle: "Непал",
      info: "8156 м",
      imgSrc: "img/Manaslu .jpg",
      imgAlt: "Manaslu",
      description: [
        "Манаслу – восьма найвища гора на Землі. Її абсолютна висота становить 8156 м. Гора входить до масиву Мансірі-Гімал Гімалаїв і розташована на території Непалу. У Манасла три вершини - Манаслу (8 156 м), Манаслу Східна (7 992 м), Манаслу Північна (6 994 м). Довгі хребти гори та долинні льодовики відкривають підходи до вершини з усіх боків і завершуються піком, що круто височить над навколишнім ландшафтом.",
      ],
    },
    {
      title: "Nangaparbat",
      subtitle: "Пакистан",
      info: "8125 м",
      imgSrc: "img/Nangaparbat.jpg",
      imgAlt: "Nangaparbat",
      description: [
        "Нангапарбат – дев’ята за висотою гора у світі. Її висота досягає 8125 м. Знаходиться на заході Гімалаїв у гірському масиві Нангапарбат на території Пакистану. Вважається однією з найнебезпечніших гірських вершин світу. Підступність гори – це її розташування поблизу рівнини край гірського масиву. Це викликає велику кількість опадів, тумани та бурани, підвищує небезпеку сходу лавин. Більшість року гора залишається неприступною, і навіть у невеликі сприятливі погодні вікна альпіністам залишається покладатися на удачу. Смертність під час підйому неї перевищує 22%.",
      ],
    },
    {
      title: "Anapurna",
      subtitle: "Непал",
      info: "8091 м",
      imgSrc: "img/anapurna3.jpg",
      imgAlt: "Anapurna",
      description: [
        "Аннапурна І замикає десятку найвищих гір у світі. Аннапурна – найвища вершина масиву Аннапурна в Гімалаях. Її висота досягає 8091 м. Гора розташована на території Непалу. Аннапурна – сама смертоносна гора серед “восьмитисячників”. Відсоток летальних випадків серед альпіністів, які намагаються зійти на її вершину, сягає 32%. Проте саме Аннапурна стала першим «восьмитисячником», на який зійшла людина. Це вдалося 1950 року французької експедиції. Навколишні території та сам гірський масив входять до національного парку «Аннапурна», який охороняється законами Непалу. Туристам, які не мають належного досвіду в альпінізмі, пропонують різні маршрути. Це трекінги, які пов’язані з набором висоти, проте не припускають підкорення вершини та не потребують спеціального обладнання. Найвідоміший серед них трек навколо Аннапурни. Туристи можуть досягти висоти 5 416 метрів і відчути особливості високогірного клімату. Протяжність колії становить 140-220 км. Для подолання цієї відстані потрібно 10-20 днів. Трекінг до Аннапурни – важлива складова підготовки до підйому на восьмитисячники. Його пройшли понад 200 тис. людей .",
      ],
    },
  ];
  const menuItem = document.querySelectorAll(".side-menu__link");
  const menu = document.querySelector(".side-menu");
  const menuBurger = document.querySelector(".header__burger");
  const content = document.querySelector(".main__content-block");
  
})
