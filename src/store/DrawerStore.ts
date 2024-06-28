import { proxy } from "valtio";

type State = {
  open: boolean;
  theme: boolean;
};

const state = proxy<State>({
  open: false,
  theme: false,
});

const DrawerStore = {
  state,

  open() {
    state.open = true;
  },

  close() {
    state.open = false;
  },
};

export default DrawerStore;
