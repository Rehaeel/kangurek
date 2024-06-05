import PageContent from "../components/universal/page-content";
import PageWrapper from "../components/universal/page-wrapper";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import Button from "../components/universal/button";
import { fbEvent } from "../utils/fpixel";

const WakacjePage = () => {
  return (
    <PageWrapper
      title="Wakacje z Kangurkiem"
      image="/images/pages/wakacje/Wakacje.jpg"
    >
      <PageContent>
        <div className="flex w-full max-w-[600px] flex-col gap-8">
          <div className="flex items-center justify-center gap-2 md:gap-8">
            <Image src={Logo} alt="logo" />
            <h3 className="text-xl md:text-2xl">
              Zapraszamy na cykl zajęć terapeutycznych
            </h3>
          </div>

          <div className="flex flex-col items-center gap-2">
            <h3 className="text-xl md:text-2xl">Drogi Rodzicu,</h3>
            <b>jeżeli zauważyłeś u swojego dziecka:</b>
            <ul className="list-inside list-disc">
              <li>trudności w skupieniu uwagi i słuchaniu</li>
              <li>zaburzenia integracji sensorycznej,</li>
              <li>problemy logopedyczne,</li>
              <li>
                trudności w wyrażaniu emocji lub w społecznym funkcjonowaniu
              </li>
            </ul>
            <b>to przychodzimy z pomocą.</b>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <h3 className="text-center text-xl md:text-2xl">
              Zapraszamy dzieci w wieku 6 - 9 lat na cykl zajęć terapeutycznych
            </h3>
            <h2 className="text-center text-2xl md:text-3xl">
              {`"Wakacje z Kangurkiem"`}
            </h2>

            <div className="text-center">
              <p>Data:</p>
              <p>1 turnus: 1-5.07.2024</p>
              <p>2 turnus: 8-12.07.2024</p>
            </div>

            <b>
              Podczas zajęć będziemy realizować programy terapeutyczne
              dostosowane do potrzeb dziecka, ale też nie zapomnimy o dobrej
              zabawie i wypoczynku.
            </b>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <h3 className="text-center text-xl md:text-2xl">
              Jakie zajęcia będą realizowane podczas pobytu Państwa dziecka u
              nas?
            </h3>

            <ul className="list-inside list-disc">
              <li>Zabawy z elementami integracji sensorycznej,</li>
              <li>terapia ręki,</li>
              <li>terapia logopedyczna,</li>
              <li>
                {`"Główka pracuje", czyli zabawy logiczne oraz zajęcia
                  poprawiające koncentrację uwagi,`}
              </li>
              <li>
                {`"Aktywne słuchanie", czyli praca nad percepcją słuchową,`}
              </li>
              <li>
                zajęcia sportowe doskonalące koordynacje wzrokowo - ruchową,
              </li>
              <li>zajęcia z udziałem psa,</li>
              <li>kreatywność.</li>
            </ul>
            <b>ℹ️ zajęcia będą się odbywały w małych grupach</b>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <h3 className="text-center text-xl md:text-2xl">
              RAMOWY PLAN DNIA
            </h3>
            <ul>
              <li>8:30 - 9:00 - zbiórka w placówce</li>
              <li>9:00 - 10:00 - zajęcia integracyjne</li>
              <li>10:00 - 10:15 - przerwa na posiłek</li>
              <li>10:15 - 11:00 - zajęcia terapeutyczne</li>
              <li>11:00 - 11:15 - przerwa</li>
              <li>11:15 - 12:00 - zajęcia terapeutyczne</li>
              <li>12:00 - 12:30 - swobodna zabawa</li>
              <li>12:30 - 13:15 - zajęcia terapeutyczne</li>
              <li>13:15 - 13:40 - przerwa na posiłek</li>
              <li>13:40 - 14:25 - zajęcia terapeutyczne</li>
              <li>14:25 - 15:00 - relaksacja</li>
            </ul>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <h3 className="text-center text-xl md:text-2xl">Zapewniamy:</h3>
            <ul className="list-inside list-disc">
              <li>kompetentną kadrę specjalistów,</li>
              <li>
                dobrze wyposażone sale w pomoce dydaktyczne i sprzęt
                terapeutyczny,
              </li>
              <li>psy wyszkolone do zajęć tereapeutycznych,</li>
              <li>pomoce papiernicze,</li>
              <li>wodę i herbatę do picia</li>
            </ul>

            <h3 className="text-end text-xl md:text-2xl">
              ...oraz dobrą zabawę!
            </h3>
          </div>

          <div className="mt-4 flex flex-col justify-center gap-4">
            <p>
              Na początku turnusu terapeutycznego, każde dziecko będzie miało
              przeprowadzoną konsultację, pod kątem ewentualnych zaburzeń.
              Łącznie odbędzie się <b className="text-xl">20</b> terapii, <br />
              <b className="text-xl">5</b> zajęć integracyjnych i{" "}
              <b className="text-xl">duuuuuuuużo dobrej zabawy.</b>
            </p>

            <h3 className="text-center text-xl md:text-3xl">
              Cena za 1 turnus: <b>1500 zł</b>
            </h3>
          </div>

          <div className="self-center">
            <Button
              href="/kontakt"
              onClick={() =>
                fbEvent("Contact", {
                  source: "Cennik",
                })
              }
            >
              Zadzwoń i umów się!
            </Button>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  );
};
export default WakacjePage;
