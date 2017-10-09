export const toJSONModel = (model) => {
  let result = model.toObject({ versionKey: false });
  result.id = result._id;

  delete result._id;

  return result;
}

export const toDBModel = (model) => {
  let result = Object.assign({}, model, { _id: model.id});

  delete result.id;

  return result;
}
