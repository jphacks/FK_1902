export const snapShotToArray = snapShot => {
  let array = [];
  snapShot.forEach(doc => {
    const data = {
      ...documentToObject(doc)
    };
    array.push(data);
  });
  return array;
};

export const documentToObject = doc => {
  const docData = doc.data();
  if (docData.createdAt) {
    docData.createdAt = docData.createdAt.toDate();
  }
  const obj = {
    docId: doc.id,
    ...docData
  };
  return obj;
};
