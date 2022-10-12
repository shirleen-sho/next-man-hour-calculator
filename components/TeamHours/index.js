import TeamHour from "./TeamHour"
import { useHourCalculator } from "../../hooks/useHourCalculator"

const TeamHours = () => {
    const { salaryDetails } = useHourCalculator()
    return (
        <table className='table-fixed shadow-sm border-separate border-spacing-3 bg-primary-800 w-full lg:w-2/3 h-fit cursor-default'>
            <tbody>
            { salaryDetails.map((detail, index) => {
              return (
                <TeamHour
                  key={"team"+index}
                  index={index}
                  salaryDetail={detail}
                />
              )
            }) }
            </tbody>
        </table>
    )
}

export default TeamHours