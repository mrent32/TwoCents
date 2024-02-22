const users = [
    'Derek Drummond',
    'Martin Renteria',
    'Jacob Renteria',
    'Anissa Barajas',
]
 
const thoughts = [
    'THIS is a stupid js keyword',
    'why is coding so hard',
    'i think that tv is too heavy for the mount',
    'the r7 is a dreadfully slow bike',
]
const getRandomArrItem = (arr) => arr[Math.floor(Math.random()* arr.length)];

const getRandomUser = () => `${getRandomArrItem(users)}`

const getRandomThoughts = (int) => {
    const results = []
    for (let i = 0; i < int; ++i) {
        results.push({
            thoughtName: getRandomArrItem(thoughts),
        })
    }
    return results
}
export { getRandomUser, getRandomThoughts }