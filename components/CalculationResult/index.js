import { useHourCalculator } from "../../hooks/useHourCalculator"

const CalculationResult = () => {
  const { 
    totalHour, 
    totalCost, 
    resetCalculator,
    estWeeksIn1Month,
    estWorkingHoursIn1Week
  } = useHourCalculator()
  
  // format mumber
  let	number_string = totalCost.toString(),
	split	= number_string.split('.'),
	sisa 	= split[0].length % 3,
	rupiah 	= split[0].substr(0, sisa),
	ribuan 	= split[0].substr(sisa).match(/\d{1,3}/gi);
  if (ribuan) {
    let separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }
  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  
  const formattedTotalCost = rupiah

    return (
      <div className="w-full lg:w-1/3 flex flex-col">
        <table className='table-fixed shadow-sm border-separate border-spacing-3 bg-primary-800 text-primary-50 w-full h-fit cursor-default'>
            <tbody>
              <tr className='h-[40px] font-semibold'>
                <td className='w-1/3'>Total Hour</td>
                <td className='w-2/3'>{totalHour}</td>
              </tr>
              <tr className='h-[40px] font-semibold'>
                <td className='w-1/3'>Total Cost</td>
                <td className='w-2/3 pl-3 pr-12 py-2 bg-complementary-900 text-white'>
                  Rp {formattedTotalCost}
                </td>
              </tr>
            </tbody>
        </table>
        <span className="mt-1 text-[10px] italic text-primary-50">
          * calculated with estimation : 
          <ul>
            <li>1 month = {estWeeksIn1Month} weeks</li>
            <li>1 week = {estWorkingHoursIn1Week} working hours</li>
          </ul>
        </span>
        <button 
          className="mt-6 bg-primary-100 hover:bg-primary-900 text-primary-900 hover:text-primary-100 hover:border hover:border-primary-50 px-6 py-2 rounded-3xl font-semibold"
          onClick={resetCalculator}
        >
          Reset
        </button>
      </div>
    )
}

export default CalculationResult