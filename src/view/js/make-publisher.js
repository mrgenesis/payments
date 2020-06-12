function makePublisher(publisherModel, publisher = {}) {
    for (let i in publisherModel) if (publisherModel.hasOwnProperty(i)) {
        publisher[i] = publisherModel[i];
    }

    return publisher;
}

export { makePublisher };