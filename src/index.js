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

	const intersection = uniqueRelevant.filter(x => retrievedSet.has(x));

	if (!intersection || intersection.length === 0) {
		return defaultValues;
	}

	const precision = intersection.length / uniqueRetrieved.length;
	const recall = intersection.length / uniqueRelevant.length;
	const f = 2 * (precision * recall) / (precision + recall);
	return {
        precision,
        recall,
        f,
	};
};
    
export default calculator;
