import { tariff } from "./tariff";

const Cennik: React.FC = () => {
  return (
    <>
      <table className="border border-orange-color text-[#222]">
        <thead>
          <tr className="sticky top-12 border-b-2 border-orange-color/30 bg-orange-color text-lg text-white">
            <td className="px-[10px] py-[5px] text-lg">Usługa</td>
            <td className="px-[10px] py-[5px] text-lg">Czas trwania zajęć</td>
            <td className="px-[10px] py-[5px] text-lg">Cena brutto</td>
          </tr>
        </thead>

        <tbody>
          {tariff.map((head, index) => (
            <>
              <tr
                key={index}
                className="even:border-t even:border-y-orange-color even:bg-[#F0CC80]"
              >
                <th colSpan={3}>{head.header}</th>
              </tr>
              {head.body.map((service, index) => {
                return (
                  <tr
                    key={(index + 1) * 10}
                    className="border-t border-y-orange-color even:bg-[#F0CC80]"
                  >
                    <td className="border-r border-r-orange-darker-color px-[10px] py-[5px]">
                      {service.serviceName}
                    </td>
                    <td className="px-[10px] py-[5px]">{service.duration}</td>
                    <td className="border-l border-l-orange-darker-color px-[10px] py-[5px]">
                      {service.cost}
                    </td>
                  </tr>
                );
              })}
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Cennik;
