
function Food () {
    
    const food1 = "Orange";
    const food2 = "Banana";
    const foods = ["Orange", "Banana", "Apple"];

    return (
        <>
            <ul>
                {foods.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
};

export default Food;