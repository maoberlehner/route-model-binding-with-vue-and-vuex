export default function bindModel(model) {
  return route => ({ [model.name]: model.find(route.params[model.name]) });
}
