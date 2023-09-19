import Button from "../components/universal/button";
import Link from "next/link";
import { NextPage } from "next";

type Props = {};

const AkademiaKoncentracjiMaluchaPage: NextPage<Props> = (props) => {
  const {} = props;

  return (
    <div className="my-11 mx-auto flex w-11/12 flex-col items-center gap-8 sm:w-10/12 md:w-9/12">
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-3xl md:text-4xl">
            AKADEMIA KONCENTRACJI MALUCHA
          </h1>
          <h2 className="text-center text-xl md:text-2xl">
            Popraw koncentrację swojego dziecka!
          </h2>
          <p className="text-center">
            Zapisz się do Akademii Koncentracji Malucha na zajęcia w Centrum
            Kangurek dla dzieci w wieku przedszkolnym i wczesnoszkolnym.
          </p>
        </div>
        <Button href="tel:+48505776121">ZADZWOŃ</Button>
      </div>

      <div className="mt-8 flex w-full w-full flex-col gap-2">
        <p>Drogi Rodzicu, jeśli Twoje dziecko:</p>
        <ul className="flex flex-col gap-1">
          <li>🎒 gubi ważne rzeczy</li>
          <li>🙈 popełnia błędy przez nieuwagę</li>
          <li>🙉 nie reaguje na komunikaty</li>
          <li>🔄 zadania wykonuje niedokładnie lub ich nie kończy</li>
          <li>📅❌ nie pamięta o codziennych obowiązkach</li>
          <li>🧠❌ nie lubi podejmować pracy umysłowej</li>
        </ul>
      </div>

      <div className="mt-6 flex w-full flex-col gap-4">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl md:text-2xl">Mamy dla Ciebie rozwiązanie!</h3>
          <p className="text-lg md:text-xl">AKADEMIA KONCENTRACJI MALUCHA</p>
        </div>

        <p className="text-center">
          Stworzyliśmy autorski program pracy nad koncentracją uwagi dzieci,
          które mogą osiągnąć znaczną przewagę w rozwoju nad swoimi
          rówieśnikami.
        </p>
      </div>

      <div className="mt-4 flex w-full flex-col gap-2">
        <h3 className="mb-4 text-xl md:text-2xl">
          Co zyska pociecha dołączając do Akademii Koncentracji Malucha:
        </h3>

        <p>
          ✅ <b>Poprawi skupienie</b> - Maluch będzie w stanie lepiej
          koncentrować się na zadaniach, co przekłada się na wyższą
          produktywność i jakość wykonywanej pracy.
        </p>
        <p>
          ✅ <b>Polepszy pamięć</b> - Regularne ćwiczenia koncentracji pomogą w
          poprawie krótko- i długotrwałej pamięci.
        </p>
        <p>
          ✅ <b>Zwiększy wytrwałość umysłową</b> - Dziecko będzie w stanie
          pracować nad zadaniem przez dłuższy czas bez rozpraszania się.
        </p>
        <p>
          ✅ <b>Poprawi zdolności do rozwiązywania problemów</b> -
          Skoncentrowany umysł jest bardziej analityczny i kreatywny w podejściu
          do wyzwań.
        </p>
        <p>
          ✅ <b>Zmniejszy poziomu stresu</b> - Uważność i koncentracja mogą
          pomóc w redukcji stresu i lęku.
        </p>
        <p>
          ✅ <b>Poprawi relacje z innymi</b> - Maluch będzie bardziej obecny w
          interakcjach z innymi, co może prowadzić do głębszych i bardziej
          satysfakcjonujących relacji.
        </p>
        <p>
          ✅ <b>Rozwinie umiejętności adaptacyjne</b> - Dziecko będzie lepiej
          radzić sobie z nieoczekiwanymi zmianami i wyzwaniami, dzięki zdolności
          do skupienia się na chwili obecnej.
        </p>
        <p>
          ✅ <b>Zwiększy kreatywność</b> - Gdy umysł jest skoncentrowany, może
          swobodniej przepływać kreatywność, co prowadzi do nowych pomysłów i
          rozwiązań.
        </p>
        <p>
          ✅ <b>Polepszy regulację emocji</b> - Pociecha będzie w stanie lepiej
          rozpoznawać i kontrolować swoje emocje, co prowadzi do bardziej
          zrównoważonego zachowania.
        </p>
        <p>
          ✅ <b>Zwiększy pewność siebie</b> - Dzięki zdolności do skupienia się
          i osiągania sukcesów w zadaniach, dziecko może poczuć się bardziej
          pewne siebie w swoich zdolnościach.
        </p>
      </div>

      <div className="flex w-full flex-col gap-4">
        <h3 className="mb-2 text-center text-xl md:text-2xl">
          Co zawiera Akademia Koncentracji Malucha
        </h3>
        <div>
          <p>
            Cotygodniowe zajęcia dostosowane do wieku i możliwości dziecka. Gry,
            zabawy umysłowe i kreatywne odbywające się w przyjaznej, domowej
            atmosferze. Zapewniamy niezbędne materiały.
          </p>
          <p>
            Wplatamy elementy terapii integracji sensorycznej dla prawidłowego
            funkcjonowania zmysłów. Przekażemy Tobie Rodzicu dodatkowe
            ćwiczenia, które możesz wykonywać ze swoim Maluchem w domu.
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4">
        <u className="text-lg md:text-xl">
          Zajęcia odbywają się od października do czerwca
        </u>
        <div className="grid w-fit grid-cols-[auto_1fr]">
          <span className="border-r py-1 px-2">Poniedziałek</span>
          <span className="border-l py-1 px-2">17:30 - 18:15</span>

          <span className="border-r py-1 px-2">Wtorek</span>
          <span className="border-l py-1 px-2">9:00 - 9:45</span>

          <span className="border-r py-1 px-2">Środa</span>
          <span className="border-l py-1 px-2">
            15:30 -16:15 ; 16:30 - 17:15
          </span>

          <span className="border-r py-1 px-2">Czwartek</span>
          <span className="border-l py-1 px-2">9:00 - 9:45</span>

          <span className="border-r py-1 px-2">Piątek</span>
          <span className="border-l py-1 px-2">
            15:30 - 16:15 ; 16:30 - 17:15
          </span>
        </div>
        <p>
          W razie dużego zainteresowania istnieje możliwość stworzenia większej
          ilości grup w innych godzinach.
        </p>
      </div>

      <div className="mt-6 flex w-full flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-center text-xl md:text-2xl">
            Inwestycja w Twoje dziecko z Akademią Koncentracji Malucha to
            jedynie
          </h3>
          <h3 className="text-center text-2xl text-green-600 md:text-3xl">
            <b>240 zł na miesiąc!</b>
          </h3>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Button href="tel:+48505776121">ZADZWOŃ</Button>
          <Link href="tel:+48505776121" className="cursor-pointer">
            <b className="text-center text-lg md:text-xl">505-776-121</b>
          </Link>
        </div>
      </div>

      <div
        data-widget-form="formaloo-widget"
        data-prop-slug="HN4aIPU5"
        data-prop-type="drawer"
        dir="ltr"
        style={{ fontSize: 14, lineHeight: "normal" }}
      />
      {/*<script type="text/props">{ "once_per_user": false }</script>*/}
      <script async src="https://widget.formaloo.me/script.js"></script>
    </div>
  );
};

export default AkademiaKoncentracjiMaluchaPage;
