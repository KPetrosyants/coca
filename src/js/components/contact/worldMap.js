import placemarkImg from '/assets/icons/pin.svg';


export const useWorldMap = () => {
  const dot1 = [-23.54559598620423, 133.52839400009333];
  const dot2 = [55.75399399999374,37.62209300000001];
  // Инициализация карты
  function init() {
    let map = new ymaps.Map('world-map', {
      center: [46.711944, 38.27266],
      zoom: 1.5,
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    let placemark1 = new ymaps.Placemark(
      dot1,
      {
        balloonContent: `<div class="balloon">
				<div class="balloon__address">Yogja, INA</div>
				<div class="balloon__descr">
                100 Smith Street </br>
                Collingwood VIC 3066 AU
				</div>
			</div>`,
      },
      {
        iconImageHref: placemarkImg,
        iconLayout: 'default#image',
        iconImageSize: [40, 40],
        iconImageOffset: [-19, -44],
      },
    );

    let placemark2 = new ymaps.Placemark(
      dot2,
      {
        balloonContent: `<div class="balloon">
				<div class="balloon__address">Russia, Moscow</div>
				<div class="balloon__descr">
                100 Lenina street </br>
				</div>
			</div>`,
      },
      {
        iconImageHref: placemarkImg,
        iconLayout: 'default#image',
        iconImageSize: [40, 40],
        iconImageOffset: [-19, -44],
      },
    );
    map.geoObjects.add(placemark1);
    map.geoObjects.add(placemark2);

    // placemark.balloon.open();
  }
  ymaps.ready(init);
};
