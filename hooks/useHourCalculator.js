import React, { createContext, useContext, useState } from "react"

const calculationContext = createContext()

const useCalculationProvider = () => {

    const avgMonthlySalary = [
        { team: "Backend Developer", salary: 2500000 },
        { team: "Frontend Developer", salary: 2500000 },
        { team: "System Analyst", salary: 2000000 },
        { team: "Quality Control", salary: 2000000 },
    ]
    
    const estWeeksIn1Month = 4.345
    const estWorkingHoursIn1Week = 40

    const avgHourlySalary = avgMonthlySalary.map(i => {
        const hourSalary = (i.salary/estWeeksIn1Month)/estWorkingHoursIn1Week
        return { team: i.team, hourSalary: hourSalary, hour: 0, monthSalary: i.salary }
    })
    
    const [salaryDetails, setSalaryDetails] = useState(avgHourlySalary)
    const [totalHour, setTotalHour] = useState(0)
    const [totalCost, setTotalCost] = useState(0)

    const handleChangeSalaryDetails = (team, hour) => {
        const findTeam = salaryDetails.find(s => { return s.team === team })
        const updateDetail = { ...findTeam, hour: hour }
        const updatedSalaryDetails = salaryDetails.map((s) => { return s.team === team ? updateDetail : s })
        setSalaryDetails(updatedSalaryDetails)
        handleChangeTotalHour(updatedSalaryDetails)
        handleChangeTotalCost(updatedSalaryDetails)
    }

    const handleChangeTotalHour = (updatedSalaryDetails) => {
        let hours = 0
        updatedSalaryDetails.forEach(i => { return hours = hours + i.hour })
        setTotalHour(hours)
    }

    const handleChangeTotalCost = (updatedSalaryDetails) => {
        let cost = 0
        const countTeamHourSalary = updatedSalaryDetails.map(i => { return { team: i.team, teamHourSalary: i.hour * i.hourSalary } })
        countTeamHourSalary.forEach(i => { return cost = cost + i.teamHourSalary })
        const formattedCost = parseFloat(cost.toFixed(2))
        setTotalCost(formattedCost)
    }

    const handleClickReset = () => {
        setSalaryDetails(avgHourlySalary)
        setTotalHour(0)
        setTotalCost(0)
    }

    return {
        salaryDetails,
        updateSalaryDetails: handleChangeSalaryDetails,
        totalHour,
        totalCost,
        resetCalculator: handleClickReset,
        estWeeksIn1Month, 
        estWorkingHoursIn1Week
    };
}

export const CalculationProvider = ({ children }) => {
    const calculation = useCalculationProvider();
    return <calculationContext.Provider value={calculation}>{children}</calculationContext.Provider>
}

export const useHourCalculator = () => {
    return useContext(calculationContext)
}