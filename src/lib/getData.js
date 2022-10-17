const wait = () => {
	return new Promise((res, rej) => {
		setTimeout(() => res(), 2000);
	});
};
const getData = async (store) => {
	await wait();
	store.set({
		test: 123
	});
};

export default getData;
