def linear_search(arr, target):
    for index, element in enumerate(arr):
        if element == target:
            return index
    return -1  # Return -1 if the target element is not found

# Example usage
arr = [1, 3, 5, 7, 9, 2, 4, 6, 8]
target = 5
result = linear_search(arr, target)
if result != -1:
    print(f"Linear Search: Element {target} found at index {result}.")
else:
    print(f"Linear Search: Element {target} not found in the array.")



    def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2  # Find the middle index
        mid_element = arr[mid]

        # Check if the middle element is the target
        if mid_element == target:
            return mid
        # If the target is smaller, ignore the right half
        elif mid_element > target:
            right = mid - 1
        # If the target is larger, ignore the left half
        else:
            left = mid + 1

    return -1  # Return -1 if the target element is not found

# Example usage (assuming the array is sorted)
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
target = 5
result = binary_search(arr, target)
if result != -1:
    print(f"Binary Search: Element {target} found at index {result}.")
else:
    print(f"Binary Search: Element {target} not found in the array.")






    // Create a Map to store countries and their capitals
const countryCapitalMap = new Map([
    ['USA', 'Washington, D.C.'],
    ['Canada', 'Ottawa'],
    ['United Kingdom', 'London'],
    ['France', 'Paris'],
    ['Germany', 'Berlin']
]);

// Print out the names of countries and their capitals
console.log('Countries and Capitals:');
countryCapitalMap.forEach((capital, country) => {
    console.log(`${country} - ${capital}`);
});






// Sample array with duplicates
const numbersArray = [1, 2, 3, 4, 2, 5, 6, 1, 7, 8, 3, 9];

// Use Set to remove duplicates
const uniqueNumbersSet = new Set(numbersArray);

// Convert the Set back to an array (if necessary) or directly iterate and print the elements
console.log('Array after removing duplicates using Set:');
uniqueNumbersSet.forEach(number => {
    console.log(number);
});




// Creating a new Map
let myMap = new Map();

// Adding key-value pairs to the Map
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('city', 'New York');

// Displaying the Map
console.log('Map after adding key-value pairs:');
console.log(myMap);

// Checking if a key exists in the Map
let keyToCheck = 'age';
if (myMap.has(keyToCheck)) {
    console.log(`Key '${keyToCheck}' exists in the Map. Value: ${myMap.get(keyToCheck)}`);
} else {
    console.log(`Key '${keyToCheck}' does not exist in the Map.`);
}

// Deleting a key from the Map
let key





// Creating sets for even and odd numbers between 1 and 10
const evenNumbers = new Set([2, 4, 6, 8, 10]);
const oddNumbers = new Set([1, 3, 5, 7, 9]);

// Finding the union of the two sets
const unionSet = new Set([...evenNumbers, ...oddNumbers]);
console.log('Union of even and odd numbers:', unionSet);

// Finding the intersection of the two sets
const intersectionSet = new Set([...evenNumbers].filter(num => oddNumbers.has(num)));
console.log('Intersection of even and odd numbers:', intersectionSet);

// Finding elements only in the even numbers set
const evenOnlySet = new Set([...evenNumbers].filter(num => !oddNumbers.has(num)));
console.log('Elements only in even numbers set:', evenOnlySet);

// Finding elements only in the odd numbers set
const oddOnlySet = new Set([...oddNumbers].filter(num => !evenNumbers.has(num)));
console.log('Elements only in odd numbers set:', oddOnlySet);




// Create a Map to store fruits and their colors
const fruitColorsMap = new Map([
    ['apple', 'red'],
    ['banana', 'yellow'],
    ['orange', 'orange'],
    ['grape', 'purple'],
    ['watermelon', 'green']
]);

// Iterate through the Map and print fruit names and colors
console.log('Fruit Names and Colors:');
for (let [fruit, color] of fruitColorsMap) {
    console.log(`${fruit} - ${color}`);
}




// Create a Set of integers
const numberSet = new Set();

// Add elements to the Set
numberSet.add(1);
numberSet.add(2);
numberSet.add(3);
numberSet.add(4);

// Print the original size of the Set
console.log('Original size of the Set:', numberSet.size);

// Clear the Set
numberSet.clear();

// Print the size of the Set after clearing (it should be 0)
console.log('Size of the Set after clearing:', numberSet.size);




// Create a Map to store city names and populations
const cityPopulations = new Map([
    ['New York', 8623000],
    ['Los Angeles', 3990000],
    ['Chicago', 2716000],
    ['Houston', 2328000],
    ['Phoenix', 1690000]
]);

// Function to update the population of a given city
function updatePopulation(city, newPopulation) {
    if (cityPopulations.has(city)) {
        cityPopulations.set(city, newPopulation);
        console.log(`Population of ${city} updated to ${newPopulation}.`);
    } else {
        console.log(`${city} not found in the city populations Map.`);
    }
}

// Example usage: Update the population of New York
const updatedPopulation = 9000000;
updatePopulation('New York', updatedPopulation);

// Print the updated population of New York
console.log(`Updated population of New York: ${cityPopulations.get('New York')}`);




// Create a Set to store programming languages
const programmingLanguagesSet = new Set(['JavaScript', 'Python', 'Java', 'C++', 'Ruby']);

// Function to check if a programming language exists in the Set
function isLanguageInSet(language) {
    return programmingLanguagesSet.has(language);
}

// Example usage of the function
const languageToCheck = 'Python';
const isLanguageFound = isLanguageInSet(languageToCheck);

// Output the result
if (isLanguageFound) {
    console.log(`${languageToCheck} exists in the programming languages Set.`);
} else {
    console.log(`${languageToCheck} does not exist in the programming languages Set.`);
}
// Create a Map to store countries and their official languages
const countriesMap = new Map([
    ['USA', 'English'],
    ['France', 'French'],
    ['Germany', 'German'],
    ['China', 'Mandarin'],
    ['Japan', 'Japanese']
]);

// Print out keys (country names) of the Map
console.log('Country Names:');
for (let country of countriesMap.keys()) {
    console.log(country);
}

// Print out values (official languages) of the Map
console.log('\nOfficial Languages:');
for (let language of countriesMap.values()) {
    console.log(language);
}



// Create a Set to store colors
const colorsSet = new Set(['Red', 'Blue', 'Green', 'Yellow', 'Orange']);

// Function to remove a specific color from the Set
function removeColor(color) {
    if (colorsSet.has(color)) {
        colorsSet.delete(color);
        console.log(`Color '${color}' removed from the Set.`);
    } else {
        console.log(`Color '${color}' not found in the Set. Nothing to remove.`);
    }
}

// Example usage: Remove the color 'Green'
removeColor('Green');

// Print the updated set of colors
console.log('Updated Set of Colors:', colorsSet);
