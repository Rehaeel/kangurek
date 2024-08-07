import { NextPage } from "next";
import { terapeuciList } from "../components/pages/terapeuci/terapeuci-list";
import Masonry from "react-masonry-css";
import Image from "next/image";
import { useMemo, useState } from "react";
import PageContent from "../components/universal/page-content";
import Head from "next/head";
import { DOMAIN_NAME } from "../utils/constants";
import { useRouter } from "next/router";
import { Terapeuta } from "../components/pages/terapeuci/types";

const title: string = "Terapeuci";
const description: string = "Lista terapeutów pracujących w centrum kangurek";

const TerapeuciPage: NextPage = () => {
  const router = useRouter();

  const [tabMaxHeight, setTabMaxHeight] = useState<number | null>(null);
  const [tabOpacity, setTabOpacity] = useState<number | null>(null);
  const [showMore, setShowMore] = useState<number | null>(null);

  const showMoreClick = (index: number) => {
    if (showMore !== index) {
      setShowMore(index);
      setTabMaxHeight(index);
      setTabOpacity(index);
    } else {
      setShowMore(null);
      setTabMaxHeight(null);
      setTabOpacity(null);
    }
  };

  const breakpointColumnsObj = {
    default: 3,
    980: 2,
    765: 1,
  };

  const terapeuci: Terapeuta[] = useMemo(() => {
    return terapeuciList.map((terapeuta) => ({
      ...terapeuta,
      image: `/images/pages/terapeuci/${terapeuta.image}.jpg`,
    }));
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="terapeuci, integracja sensoryczna, centrum-kangurek"
        />
        <meta property="og:title" content={`Centrum Kangurek - ${title}`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${DOMAIN_NAME}/${router.pathname}`} />
      </Head>

      <PageContent>
        <h1 className="mt-6 font-bold md:mt-8">Terapeuci</h1>
        <Masonry
          className="mx-[2%] flex w-auto xl:mx-0 xl:-ml-[30px]"
          columnClassName="pl-0 md:ml-[30px] bg-clip-padding"
          breakpointCols={breakpointColumnsObj}
        >
          {terapeuci.map((terapeuta, index) => {
            return (
              <div
                key={index}
                className="relative my-5 flex h-fit w-full max-w-[500px] flex-col items-center gap-5 rounded-[50px] border-2 border-[#c6c6c6] bg-[#fcfcfc] p-[20px] text-left sm:p-[30px] md:my-0 md:mb-[30px]"
              >
                <Image
                  priority
                  src={terapeuta.image}
                  alt={`${terapeuta.name}-terapeuta`}
                  width={150}
                  height={150}
                  className="rounded-full"
                />
                <h3 className="my-5 text-2xl font-extrabold">
                  {terapeuta.name}
                </h3>
                <ul className="list-outside list-disc self-start pl-[30px] text-lg font-light leading-7">
                  {terapeuta.education.map((educationList, index) => {
                    return (
                      <li key={index} className="text-sm md:text-base">
                        {educationList}
                      </li>
                    );
                  })}
                </ul>
                <div
                  style={{
                    maxHeight: tabMaxHeight === index ? 5000 : 0,
                    opacity: tabOpacity === index ? 1 : 0,
                    transition: "max-height 0.5s ease",
                  }}
                  className="flex flex-col gap-4 overflow-hidden transition-all duration-500"
                >
                  <h4 className="text-base font-extrabold underline md:text-lg">
                    DOŚWIADCZENIE ZAWODOWE
                  </h4>
                  {terapeuta.experience.map((e, i) => (
                    <p key={i} className="text-sm font-thin md:text-base">
                      {e}
                    </p>
                  ))}
                </div>
                <p
                  onClick={() => showMoreClick(index)}
                  className="z-10 cursor-pointer text-orange-color hover:underline"
                >
                  {showMore === index
                    ? "Zobacz mniej ..."
                    : "Zobacz więcej ..."}
                </p>
              </div>
            );
          })}
        </Masonry>
      </PageContent>
    </>
  );
};

export default TerapeuciPage;
