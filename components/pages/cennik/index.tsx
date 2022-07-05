import { tariff } from './tariff';

export default function Cennik() {
	return (
		<>
			<table className='border border-orange-color text-[#222]'>
				<tr className='sticky top-12 bg-orange-color text-white border-b-2 border-orange-color/30 text-lg'>
					<td className='px-[10px] py-[5px] text-lg'>Usługa</td>
					<td className='px-[10px] py-[5px] text-lg'>
						Czas trwania zajęć
					</td>
					<td className='px-[10px] py-[5px] text-lg'>Cena brutto</td>
				</tr>

				{tariff.map((head, index) => (
					<>
						<tr
							key={index}
							className='even:bg-[#F0CC80] even:border-t even:border-y-orange-color'>
							<th colSpan={3}>{head.header}</th>
						</tr>
						{head.body.map((service, index) => {
							return (
								<tr
									key={(index + 1) * 10}
									className='even:bg-[#F0CC80] border-t border-y-orange-color'>
									<td className='px-[10px] py-[5px]'>
										{service.serviceName}
									</td>
									<td className='px-[10px] py-[5px]'>
										{service.duration}
									</td>
									<td className='px-[10px] py-[5px]'>
										{service.cost}
									</td>
								</tr>
							);
						})}
					</>
				))}
			</table>
		</>
	);
}
