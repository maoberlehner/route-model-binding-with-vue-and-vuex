import { createHelpers } from 'vuex-map-fields';

import store from '../store';

export default class Base {
  constructor() {
    this.fetching = false;
    this.idIsInt = true;
    this.idKey = 'id';
    this.name = this.constructor.name.toLowerCase();
    this.store = store;
  }

  find(rawId) {
    const state = this.store.state[this.name];
    const id = this.idIsInt ? parseInt(rawId, 10) : rawId;

    // If the model is currently fetching data
    // we escape the function early and return
    // the current `state`.
    if (this.fetching) return state;

    // If the currently loaded record matches
    // the given ID, we can skip fetching data
    // and immediately return the `state`.
    if (state[this.idKey] !== id) {
      this.fetching = true;

      // To make sure to not display old data
      // the `state` of the store module is cleared
      // before filling it with new data.
      store.commit(`${this.name}/clear`);
      store.dispatch(`${this.name}/byId`, id).then(() => {
        this.fetching = false;
      });
    }

    return state;
  }

  mapFields(fields) {
    const { mapFields } = createHelpers({
      getterType: `${this.name}/getField`,
      mutationType: `${this.name}/updateField`,
    });

    return mapFields(fields || Object.keys(this.store.state[this.name]));
  }
}
