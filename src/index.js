const defaultValues = {
	percision: 0,
	recall: 0,
	f: 0,
};

const calculator = (relevantStrings, retrievedStrings) => {
	if (!relevantStrings || relevantStrings.length === 0) {
		return defaultValues;
	}

	if (!retrievedStrings || retrievedStrings.length === 0) {
		return defaultValues;
	}

	const relevantSet = new Set(relevantStrings);
	const uniqueRelevant = Array.from(relevantSet);

	const retrievedSet = new Set(retrievedStrings);
	const uniqueRetrieved = Array.from(retrievedSet);

	const relevantAndRetrieved = [...uniqueRelevant].filter(x => retrievedSet.has(x));

	const percision = relevantAndRetrieved.length / uniqueRetrieved.length;
	const recall = relevantAndRetrieved.length / uniqueRelevant.length;
	const f = 2 * (percision * recall) / (percision + recall);
	return {
        percision,
        recall,
        f,
	};
};
    
export default calculator;
