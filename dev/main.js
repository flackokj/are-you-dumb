const moveElement = (elementId) => {
	const button = document.getElementById(elementId);
	const { x, y } = getCoordinates();

	placeElement(x, y, button);
};

const getCoordinates = () => {
	let x = parseInt(Math.ceil(Math.random() * 100 + Math.random() * 400));
	let y = parseInt(Math.ceil(Math.random() * 100 + Math.random() * 500));

	return { x, y };
};

const placeElement = (x, y, element) => {
	element.style.position = 'absolute';
	element.style.left = `${x}px`;
	element.style.top = `${y}px`;
};


const iamdumb = () => {
    const content = document.querySelector('.content')
    const buttons = document.querySelectorAll('.content__button');

    buttons.forEach(btn => {
        btn.style.pointerEvents = 'none'
    });
    content.append('I knew it 😂')
}