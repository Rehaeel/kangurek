import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import PageContent from '../components/universal/page-content';
import { DOMAIN_NAME } from '../utils/constants';

const title: string = 'Warto wiedzieć';
const description: string =
	'Co warto wiedzieć przed kontaktem z Centrum Kangurek? Baza wiedzy, gdzie dowiesz się więcej.';

const WartoWiedziec: NextPage = () => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta
					name='keywords'
					content='baza wiedzy, integracja sensoryczna, centrum-kangurek'
				/>
				<meta property='og:title' content={title} />
				<meta property='og:description' content={description} />
				<meta
					property='og:url'
					content={`${DOMAIN_NAME}/${router.pathname}`}
				/>
			</Head>
			<PageContent>
				<div className='my-7 flex w-11/12 flex-col items-start gap-5 md:my-12 md:w-8/12'>
					<b className='font-extrabold'>
						Sprawdź, czy Twoje dziecko ma zaburzenia integracji
						sensorycznej.
						<br />
						Jeżeli Twoje odpowiedzi są na TAK, zgłoś dziecko na
						diagnozę i ocenę rozwoju procesów integracji
						sensorycznej:
					</b>
					<ol className='flex list-inside list-decimal flex-col gap-3'>
						<li>
							ma kłopoty z cięciem nożyczkami, rysowaniem po
							śladzie, pisaniem,
						</li>
						<li>
							{' '}
							ma trudności w przepisywaniu, przerysowywaniu z
							tablicy,
						</li>
						<li>
							podczas dłuższego siedzenia ma trudności z
							utrzymaniem głowy w pozycji pionowej, podpiera ją
							ręką, kładzie się na stoliku,
						</li>
						<li>
							często myli stronę prawą i lewą, w obrębie własnego
							ciała, w otaczającej przestrzeni,
						</li>
						<li>preferuje dania papkowate,</li>
						<li>potyka się i upada częściej niż rówieśnicy,</li>
						<li>ma kłopoty z samodzielnym ubieraniem się,</li>
						<li>ma trudności z rzucaniem i łapaniem piłki,</li>
						<li>
							jest nadruchliwe, nie może usiedzieć / ustać w
							jednym miejscu,
						</li>
						<li>
							przejawia duży lęk przed upadkiem lub wysokością,
						</li>
						<li>
							wchodząc po schodach trzyma się poręczy, niepewnie
							stawia nogi,
						</li>
						<li>
							nagłe dotknięcie / popchnięcie z tyłu wywołuje u
							dziecka „reakcję alarmową”, niewspółmierną do siły
							bodźca,
						</li>
						<li>ma kłopoty z czytaniem z tablicy,</li>
						<li>trudno się koncentruje, a łatwo się rozprasza,</li>
						<li>
							siadając na krześle czy poprawiając na nim swoją
							pozycję zdarza się, że spada,
						</li>
						<li>ruchy dziecka są niezgrabne,</li>
						<li>
							dziecko sprawia wrażenie słabego, szybko się męczy,
						</li>
						<li>często chodzi na palcach,</li>
						<li>
							nabycie nowej umiejętności wymaga od dziecka wielu
							prób i powtórzeń,
						</li>
						<li>
							nie lubi dziecięcego baraszkowania, nie lubi turlać
							się po podłodze, podskakiwać, robić fikołków,
						</li>
						<li>
							dziecko wydaje się niezdarne, często przytrafiają
							rozlanie napoju, strącenie wazonu, rozsypanie cukru,
						</li>
						<li>
							wiele czynności samoobsługowych wykonuje z trudem,
							powoli, niezdarnie, do końca ich nie opanowało,
						</li>
						<li>
							nieumyślnie wchodzi lub wpada na meble, ściany, inne
							dzieci,
						</li>
						<li>
							długo uczy się nowych aktywności fizycznych tj.:
							jazda na rowerze, pływanie, a czasem mimo wysiłku
							nie udaje mu się ich opanować,
						</li>
						<li>
							nie lubi karuzeli, czasem huśtawki – miewa potem
							mdłości,
						</li>
						<li>
							okazuje niepokój, gdy musi oderwać nogi od podłoża,
							np.: wejść na wysokie schody, na drabinkę, usiąść na
							wysokim stołku,
						</li>
						<li>cierpi na chorobę lokomocyjną,</li>
						<li>
							źle toleruje czesanie, mycie głowy, podczas mycia
							zębów miewa odruch wymiotny,
						</li>
						<li>nie lubi określonych dźwięków, zatyka uszy,</li>
						<li>świeci sobie latarką w oczy.</li>
					</ol>
				</div>
			</PageContent>
		</>
	);
};

export default WartoWiedziec;
