import React from 'react'
import './kanguroo-club.css'
import Sections from '../../../sections/sections';
import kangurooClub from './photos/Klub-kangurka.jpg'
import ReactGA from 'react-ga';

export default class KangurooClub extends React.Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <Sections width={60}>
        <div className="kangoroo-club-site">
          <p><b>KLUB KANGURKA</b></p>
          <p>Nasze zajęcia mają charakter wspierający oraz profilaktyczny. Wspomagają  rozwój niemowląt i małych dzieci do 3 roku życia w oparciu o metodę integracji sensorycznej i W. Sherborne. Stymulując zmysły dzieci wspieramy prawidłowy rozwój procesu integracji sensorycznej.</p>
          <p>Zapraszamy wszystkie dzieci, a w szczególności z grupy ryzyka zaburzeń integracji sensorycznej (nieprawidłowości okołoporodowe, wcześniactwo, nieprawidłowości w napięciu mięśniowym, obniżona punktacja Apgar, problemy ze spaniem, ssaniem, nadwrażliwość na bodźce).</p>
          <div>
            <div>
              <p>Te zajęcia przeznaczone są dla Twojego dziecka, jeżeli zauważyłeś u niego następujące objawy: </p>
              <ul>
                <li>Nie czuje się komfortowo w bliskim kontakcie z najbliższymi</li>
                <li>Jest pobudzone, niespokojne na bodźce, które u większości dzieci działają uspokajająco</li>
                <li>Ciągle budzi się w nocy lub w dzień każdy szmer je wybudza</li>
                <li>Jest bardzo niespokojny, płaczliwy</li>
                <li>Ma problem z przejściem na pokarmy stałe, na jedzenie łyżeczką</li>
                <li>Źle toleruje wszelkie nowości- to sygnał, aby skonsultować się z terapeutą Integracji sensorycznej.</li>
              </ul>
            </div>
            <img src={kangurooClub} alt="klub-kangurka" />
          </div>
          <p>Podczas zajęć dziecko doświadcza różnorodnych bodźców zmysłowych, co odpowiednio i całościowo stymuluje jego rozwój.Rozbudzamy naturalną ciekawość dzieci.Towarzyszy nam muzyka i śpiew.Wprowadzamy dzieci w świat kształtów, kolorów, zapachów, dźwięków.Wspieramy rozwój psychoruchowy, usprawniamy motorykę dużą i małą.Nie brakuje też gimnastyki buzi i języka, wspierających rozwój mowy.</p>
          <p>Rodzice poznają dziecięce masażyki i zabawy paluszkowe.Dowiadują się w jaki sposób prawidłowo stymulować maluszka poprzez proste aktywności i zabawę.</p>
          <p>Rodzice z dziećmi świetnie bawią się, poznają pomysły na kreatywne, wspierające rozwój spędzania czasu.</p>
          <p>Korzyści z uczestniczenia w zajęciach:</p>
          <ul>
            <li>Wspieranie rozwoju sensomotorycznego dziecka</li>
            <li>Wzmocnienie więzi między dzieckiem a rodzicem</li>
            <li>Uspołecznienie dzieci</li>
            <li>Inspiracja rodziców do kreatywnej zabawy</li>
            <li>Wymiana doświadczeń między rodzicami</li>
          </ul>
          <p>Zajęcia odbywają się na sali integracji sensorycznej, w małych grupach, trwają 60 min.Opiekunowie przebywają podczas zajęć razem z dziećmi.</p>
        </div>
      </Sections >
    )
  }
}
