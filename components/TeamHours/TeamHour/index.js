import { useHourCalculator } from '../../../hooks/useHourCalculator'

const TeamHour = ({ index, salaryDetail }) => {
    const { updateSalaryDetails } = useHourCalculator()
    return (
      <tr key={'team'+index}>
        <td className='w-1/2 font-semibold text-primary-50'>{salaryDetail.team}</td>
        <td className='w-1/2'>
          <div className='flex flex-row items-center gap-3'>
              <input
                type="number"
                className='px-3 py-2 rounded-md w-[80px]'
                value={Number(salaryDetail.hour).toString()}
                onChange={(e) => updateSalaryDetails(salaryDetail.team, parseInt(e.target.value))}
              />
              <span className='mr-3 text-sm text-primary-50'>hour</span>
              <span className='text-[10px] italic text-complementary-100 hidden sm:block'>( Rp {Math.round(salaryDetail.monthSalary)} / month )</span>
          </div>
        </td>
      </tr>
    )
}

export default TeamHour