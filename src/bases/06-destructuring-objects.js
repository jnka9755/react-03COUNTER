export const getPerson = ({ name, lastName, age, weight = 60 }) => {

    return{
        fullName: `${name} ${lastName}`,
        years: age,
        location: {
            lat: 12.12312,
            lng: -12.12312
        }
    }
}